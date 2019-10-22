import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.css';
import Item from '../Item';
import Post from '../Post';
import Helping from '../Helping';

const ItemList = props => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [postInputValue, setPostInputValue] = useState('');

  useEffect(() => {
    axios.get('/api/all').then(({ data }) => {
      const { items, size: itemCount } = data;
      const activeCount = items.filter(value => value.completeFlag === 0)
        .length;
      const modifiedItems = items.map(value => {
        return { ...value, changeable: false, deletable: false };
      });
      setItemCount(itemCount);
      setActiveCount(activeCount);
      setItems(modifiedItems);
    });
  }, []);

  const handlePostClick = () => {
    const isAllCompleted = itemCount && !activeCount;
    axios
      .put(`/api/${isAllCompleted ? 'completed' : 'active'}/all`)
      .then(({ status }) => {
        if (status === 204) {
          const obj = items.map(value => {
            return { ...value, completeFlag: isAllCompleted ? 0 : 1 };
          });
          setItems(obj);
          setActiveCount(isAllCompleted ? itemCount : 0);
        }
      });
  };

  const handlePostChange = ({ target }) => {
    setPostInputValue(target.value);
  };

  const handlePostEnter = ({ key }) => {
    if (key === 'Enter') {
      // 할일 등록 요청
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
        setItems([...items, modifiedData]);
        setPostInputValue('');
        setItemCount(itemCount + 1);
        setActiveCount(activeCount + 1);
      });
    }
  };

  const handleHelpingClick = () => {
    axios.delete('/api/completed/all').then(({ status }) => {
      if (status === 204) {
        const activeItems = items.filter(value => value.completeFlag === 0);
        const itemCount = activeItems.length;
        setItemCount(itemCount);
        setItems(activeItems);
      }
    });
  };

  const handleDoubleClick = itemId => {
    return () => {
      // itemId에 맞는 index 찾아서 changeable을 true로
      const modifiedItems = items.map(value => {
        const changeable = value.itemId === itemId;
        return { ...value, changeable, deletable: false };
      });
      setItems(modifiedItems);
    };
  };

  const handleItemChange = itemId => {
    return ({ target }) => {
      // itemId같은 것을 찾아 name을 target.value로 바꿈
      const modifiedItems = items.map(value => {
        const name = value.itemId === itemId ? target.value : value.name;
        return { ...value, name };
      });
      setItems(modifiedItems);
    };
  };

  const submitModifiedName = itemId => {
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
          setItems(modifiedItems);
        }
      });
  };

  const handleOnBlur = itemId => {
    return () => {
      submitModifiedName(itemId);
    };
  };

  const handleItemEnter = itemId => {
    return ({ key }) => {
      if (key === 'Enter') {
        submitModifiedName(itemId);
      }
    };
  };

  const handleItemStateChange = itemId => {
    return () => {
      // itemId에 맞는 index 찾아서 completeFlag반전
      const index = items.findIndex(value => value.itemId === itemId);
      const modifiedItems = [...items];
      const isCompleted = modifiedItems[index].completeFlag;
      modifiedItems[index].completeFlag = isCompleted ? 0 : 1;
      const requestURI = `/api/${
        isCompleted ? 'completed' : 'active'
      }/${itemId}`;
      axios.put(requestURI).then(({ status }) => {
        if (status === 201) {
          setItems(modifiedItems);
          setActiveCount(isCompleted ? activeCount + 1 : activeCount - 1);
        }
      });
    };
  };

  const handleItemDelete = itemId => {
    return () => {
      // itemId에 맞는 index 찾아서 제거한 뒤 api 요청
      const index = items.findIndex(value => value.itemId === itemId);
      const isCompleted = items[index].completeFlag;
      axios
        .delete(`/api/${isCompleted ? 'completed' : 'active'}/${itemId}`)
        .then(({ status }) => {
          if (status === 201) {
            const modifiedItems = items.filter(
              value => value.itemId !== itemId,
            );
            setItems(modifiedItems);
            setItemCount(itemCount - 1);
            setActiveCount(isCompleted ? activeCount : activeCount - 1);
          }
        });
    };
  };

  const handleMouseOver = itemId => {
    return () => {
      // itemId에 맞는 index 찾아서 deletable을 true로
      const modifiedItems = items.map(value => {
        const deletable = value.itemId === itemId;
        return { ...value, deletable };
      });
      setItems(modifiedItems);
    };
  };

  const handleMouseOut = () => {
    const modifiedItems = items.map(value => {
      return { ...value, deletable: false };
    });
    setItems(modifiedItems);
  };

  const {
    location: { pathname },
  } = props;
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
          handleClick={handlePostClick}
          handleChange={handlePostChange}
          handleEnter={handlePostEnter}
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
                handleDoubleClick={handleDoubleClick}
                handleChange={handleItemChange}
                handleOnBlur={handleOnBlur}
                handleEnter={handleItemEnter}
                handleStateChange={handleItemStateChange}
                handleDelete={handleItemDelete}
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
              />
            );
          })}
        </ul>
        {(isHelpingShowing => {
          if (isHelpingShowing) {
            return (
              <Helping
                handleClick={handleHelpingClick}
                left={activeCount}
                isClearable={itemCount && itemCount - activeCount}
              />
            );
          }
        })(itemCount)}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ItemList;
