import React, { Component } from 'react';
import axios from 'axios';

import Item from './item';
import Header from './header';
import Footer from './footer';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemCount: null,
      activeCount: null,
      headerInput: '',
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleHeaderEnter = this.handleHeaderEnter.bind(this);
    this.handleFooterClick = this.handleFooterClick.bind(this);
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
    // 등록 요청
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

  handleHeaderClick() {
    const { activeCount, itemCount, items } = this.state;
    const isAllCompleted = itemCount && !activeCount;
    axios
      .put(`/api/${isAllCompleted ? 'completed' : 'active'}/all`)
      .then(({ status }) => {
        if (status === 201) {
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

  handleHeaderChange({ target }) {
    this.setState({ headerInput: target.value });
  }

  handleHeaderEnter({ key }) {
    if (key === 'Enter') {
      // 할일 등록 요청
      console.log('enter 명령을 받음');
      const { itemCount, activeCount, headerInput, items } = this.state;
      axios.post('/api/active', { name: headerInput }).then(({ data }) => {
        const modifiedData = { ...data, changeable: false, deletable: false };
        this.setState({
          items: [...items, modifiedData],
          headerInput: '',
          itemCount: itemCount + 1,
          activeCount: activeCount + 1,
        });
      });
    }
  }

  handleFooterClick() {
    axios.delete('/api/completed/all').then(({ status }) => {
      if (status === 201) {
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
      const changedItems = items.map(value => {
        const changeable = value.itemId === itemId;
        return { ...value, changeable, deletable: false };
      });
      this.setState({ items: changedItems });
    };
  }

  handleItemChange(itemId) {
    return ({ target }) => {
      // itemId같은 것을 찾아 name을 target.value로 바꿈
      const { items } = this.state;
      const changedItems = items.map(value => {
        const name = value.itemId === itemId ? target.value : value.name;
        return { ...value, name };
      });
      this.setState({ items: changedItems });
    };
  }

  submitModifiedName(itemId) {
    const { items } = this.state;
    let item;
    const modifiedItems = items.map(value => {
      if (value.itemId === itemId) {
        item = value;
      }
      return { ...value, changeable: false };
    });
    axios
      .put(`/api/${item.completeFlag ? 'completed' : 'active'}/${itemId}`, {
        name: item.name,
      })
      .then(({ state }) => {
        if (state === 201) {
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
    return ({ keyCode }) => {
      if (keyCode === 13) {
        this.submitModifiedName(itemId);
      }
    };
  }

  handleItemStateChange(itemId) {
    return () => {
      // itemId에 맞는 index 찾아서 completeFlag반전
      const { items, activeCount } = this.state;
      const index = items.findIndex(value => value.itemId === itemId);
      const changedItems = [...items];
      const isCompleted = changedItems[index].completeFlag;
      changedItems[index].completeFlag = isCompleted ? 0 : 1;
      const requestURI = `/api/${
        isCompleted ? 'completed' : 'active'
      }/${itemId}`;
      axios.put(requestURI).then(({ status }) => {
        if (status === 201) {
          this.setState({
            items: changedItems,
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
      let isCompleted;
      const modifiedItems = items.filter(value => {
        if (value.itemId === itemId) {
          isCompleted = value.completeFlag;
          return false;
        }
        return true;
      });
      axios
        .delete(`/api/${isCompleted ? 'completed' : 'active'}/${itemId}`)
        .then(({ status }) => {
          if (status === 201) {
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
    const { items } = this.state;
    const modifiedItems = items.map(value => {
      return { ...value, deletable: false };
    });
    this.setState({ items: modifiedItems });
  }

  render() {
    const { headerInput, itemCount, activeCount, items } = this.state;
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
      <div className="container">
        <Header
          headerInput={headerInput}
          handleClick={this.handleHeaderClick}
          handleChange={this.handleHeaderChange}
          handleEnter={this.handleHeaderEnter}
          isClickable={itemCount}
          isAllCompleted={itemCount && !activeCount}
        />
        <ul>
          {modifiedItems.map(value => {
            return (
              <Item
                key={value.itemId}
                changeable={value.changeable}
                deletable={value.deletable}
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
        <Footer
          handleClick={this.handleFooterClick}
          left={activeCount}
          location={pathname}
          isClearable={itemCount && itemCount - activeCount}
        />
      </div>
    );
  }
}

export default ItemList;
