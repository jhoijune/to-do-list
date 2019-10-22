import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.css';
import Item from '../Item';
import Post from '../Post';
import Helping from '../Helping';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemCount: 0,
      activeCount: 0,
      postInputValue: '',
    };
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostEnter = this.handlePostEnter.bind(this);
    this.handleHelpingClick = this.handleHelpingClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleItemEnter = this.handleItemEnter.bind(this);
    this.handleItemStateChange = this.handleItemStateChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    axios.get('/api/all').then(({ data }) => {
      const { items, size: itemCount } = data;
      const activeCount = items.filter(value => value.completeFlag === 0)
        .length;
      const modifiedItems = items.map(value => {
        return { ...value, changeable: false, deletable: false };
      });
      this.setState({ itemCount, activeCount, items: modifiedItems });
    });
  }

  handlePostClick() {
    const { activeCount, itemCount, items } = this.state;
    const isAllCompleted = itemCount && !activeCount;
    axios
      .put(`/api/${isAllCompleted ? 'completed' : 'active'}/all`)
      .then(({ status }) => {
        if (status === 204) {
          const obj = items.map(value => {
            return { ...value, completeFlag: isAllCompleted ? 0 : 1 };
          });
          this.setState({
            items: obj,
            activeCount: isAllCompleted ? itemCount : 0,
          });
        }
      });
  }

  handlePostChange({ target }) {
    this.setState({ postInputValue: target.value });
  }

  handlePostEnter({ key }) {
    if (key === 'Enter') {
      // 할일 등록 요청
      const { itemCount, activeCount, postInputValue, items } = this.state;
      axios.post('/api/active', { name: postInputValue }).then(response => {
        const { data, status } = response;
        if (status === 413) {
          return;
        }
        const modifiedData = {
          itemId: data.itemId,
          name: data.name,
          completeFlag: data.completeFlag,
          changeable: false,
          deletable: false,
        };
        this.setState({
          items: [...items, modifiedData],
          postInputValue: '',
          itemCount: itemCount + 1,
          activeCount: activeCount + 1,
        });
      });
    }
  }

  handleHelpingClick() {
    axios.delete('/api/completed/all').then(({ status }) => {
      if (status === 204) {
        const { items } = this.state;
        const activeItems = items.filter(value => value.completeFlag === 0);
        const itemCount = activeItems.length;
        this.setState({
          itemCount,
          items: activeItems,
        });
      }
    });
  }

  handleDoubleClick(itemId) {
    return () => {
      // itemId에 맞는 index 찾아서 changeable을 true로
      const { items } = this.state;
      const modifiedItems = items.map(value => {
        const changeable = value.itemId === itemId;
        return { ...value, changeable, deletable: false };
      });
      this.setState({ items: modifiedItems });
    };
  }

  handleItemChange(itemId) {
    return ({ target }) => {
      // itemId같은 것을 찾아 name을 target.value로 바꿈
      const { items } = this.state;
      const modifiedItems = items.map(value => {
        const name = value.itemId === itemId ? target.value : value.name;
        return { ...value, name };
      });
      this.setState({ items: modifiedItems });
    };
  }

  submitModifiedName(itemId) {
    const { items } = this.state;
    const index = items.findIndex(value => value.itemId === itemId);
    const item = items[index];
    axios
      .put(`/api/${item.completeFlag ? 'completed' : 'active'}/${itemId}`, {
        name: item.name,
      })
      .then(({ status }) => {
        if (status === 413) {
          return;
        }
        if (status === 201) {
          const modifiedItems = [...items];
          modifiedItems[index].changeable = false;
          this.setState({
            items: modifiedItems,
          });
        }
      });
  }

  handleOnBlur(itemId) {
    return () => {
      this.submitModifiedName(itemId);
    };
  }

  handleItemEnter(itemId) {
    return ({ key }) => {
      if (key === 'Enter') {
        this.submitModifiedName(itemId);
      }
    };
  }

  handleItemStateChange(itemId) {
    return () => {
      // itemId에 맞는 index 찾아서 completeFlag반전
      const { items, activeCount } = this.state;
      const index = items.findIndex(value => value.itemId === itemId);
      const modifiedItems = [...items];
      const isCompleted = modifiedItems[index].completeFlag;
      modifiedItems[index].completeFlag = isCompleted ? 0 : 1;
      const requestURI = `/api/${
        isCompleted ? 'completed' : 'active'
      }/${itemId}`;
      axios.put(requestURI).then(({ status }) => {
        if (status === 201) {
          this.setState({
            items: modifiedItems,
            activeCount: isCompleted ? activeCount + 1 : activeCount - 1,
          });
        }
      });
    };
  }

  handleItemDelete(itemId) {
    return () => {
      // itemId에 맞는 index 찾아서 제거한 뒤 api 요청
      const { items, itemCount, activeCount } = this.state;
      const index = items.findIndex(value => value.itemId === itemId);
      const isCompleted = items[index].completeFlag;
      axios
        .delete(`/api/${isCompleted ? 'completed' : 'active'}/${itemId}`)
        .then(({ status }) => {
          if (status === 201) {
            const modifiedItems = items.filter(
              value => value.itemId !== itemId,
            );
            this.setState({
              items: modifiedItems,
              itemCount: itemCount - 1,
              activeCount: isCompleted ? activeCount : activeCount - 1,
            });
          }
        });
    };
  }

  handleMouseOver(itemId) {
    return () => {
      // itemId에 맞는 index 찾아서 deletable을 true로
      const { items } = this.state;
      const modifiedItems = items.map(value => {
        const deletable = value.itemId === itemId;
        return { ...value, deletable };
      });
      this.setState({ items: modifiedItems });
    };
  }

  handleMouseOut() {
    // O(n)
    const { items } = this.state;
    const modifiedItems = items.map(value => {
      return { ...value, deletable: false };
    });
    this.setState({ items: modifiedItems });
  }

  /*
  handleMouseOut(itemId) {
    // O(2n)
    const { items } = this.state;
    const index = items.findIndex(value => value.itemId === itemId);
    const modifiedItems = [...items];
    modifiedItems[index].deletable = false;
    this.setState({ items: modifiedItems });
  }
  */

  render() {
    const { postInputValue, itemCount, activeCount, items } = this.state;
    const {
      location: { pathname },
    } = this.props;
    const modifiedItems = items.filter(value => {
      if (pathname === '/' || pathname === '/all') {
        return true;
      }
      if (pathname === '/active' && value.completeFlag === 0) {
        return true;
      }
      if (pathname === '/completed' && value.completeFlag === 1) {
        return true;
      }
      return false;
    });
    return (
      <div className="ItemList">
        <div className="container">
          <Post
            inputValue={postInputValue}
            handleClick={this.handlePostClick}
            handleChange={this.handlePostChange}
            handleEnter={this.handlePostEnter}
            isClickable={itemCount}
            isAllCompleted={itemCount && !activeCount}
          />
          <ul>
            {modifiedItems.map((value, index) => {
              return (
                <Item
                  key={value.itemId}
                  changeable={value.changeable}
                  deletable={value.deletable}
                  order={index + 1}
                  itemId={value.itemId}
                  name={value.name}
                  isCompleted={value.completeFlag}
                  handleDoubleClick={this.handleDoubleClick}
                  handleChange={this.handleItemChange}
                  handleOnBlur={this.handleOnBlur}
                  handleEnter={this.handleItemEnter}
                  handleStateChange={this.handleItemStateChange}
                  handleDelete={this.handleItemDelete}
                  handleMouseOver={this.handleMouseOver}
                  handleMouseOut={this.handleMouseOut}
                />
              );
            })}
          </ul>
          {(isHelpingShowing => {
            if (isHelpingShowing) {
              return (
                <Helping
                  handleClick={this.handleHelpingClick}
                  left={activeCount}
                  isClearable={itemCount && itemCount - activeCount}
                />
              );
            }
          })(itemCount)}
        </div>
      </div>
    );
  }
}

ItemList.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ItemList;