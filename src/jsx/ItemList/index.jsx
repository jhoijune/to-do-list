import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.css';
import Item from '../Item';
import Post from '../Post';
import Helping from '../Helping';

const ItemList = ({ location: { pathname } }) => {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [postInputValue, setPostInputValue] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { items, size: itemCount },
        } = await axios.get('/api/all');
        const activeCount = items.filter(value => value.completeFlag === 0)
          .length;
        const modifiedItems = items.map(value => {
          return { ...value, changeable: false, deletable: false };
        });
        setItemCount(itemCount);
        setActiveCount(activeCount);
        setItems(modifiedItems);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handlePostClick = () => {
    // TODO: 수정
    const isAllCompleted = itemCount && !activeCount;
    (async () => {
      try {
        const { status } = await axios.put(
          `/api/${isAllCompleted ? 'completed' : 'active'}/all`,
        );
        if (status !== 204) {
          return;
        }
        const obj = items.map(value => {
          return { ...value, completeFlag: isAllCompleted ? 0 : 1 };
        });
        setItems(obj);
        setActiveCount(isAllCompleted ? itemCount : 0);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handlePostChange = ({ target: { value } }) => {
    setPostInputValue(value);
  };

  const handlePostEnter = ({ key }) => {
    if (key !== 'Enter') {
      return;
    }
    (async () => {
      try {
        const {
          data: { itemId, name, completeFlag },
          status,
        } = await axios.post('/api/active', {
          name: postInputValue,
        });
        if (status === 413) {
          return;
        }
        const modifiedData = {
          itemId,
          name,
          completeFlag,
          changeable: false,
          deletable: false,
        };
        setItems([...items, modifiedData]);
        setPostInputValue('');
        setItemCount(itemCount + 1);
        setActiveCount(activeCount + 1);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handleHelpingClick = () => {
    (async () => {
      try {
        const { status } = await axios.delete('/api/completed/all');
        if (status !== 204) {
          return;
        }
        const activeItems = items.filter(value => value.completeFlag === 0);
        const itemCount = activeItems.length;
        setItemCount(itemCount);
        setItems(activeItems);
      } catch (error) {
        console.error(error);
      }
    })();
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
    (async () => {
      try {
        const { status } = await axios.put(
          `/api/${item.completeFlag ? 'completed' : 'active'}/${itemId}`,
          {
            name: item.name,
          },
        );
        if (status !== 201) {
          return;
        }
        const modifiedItems = [...items];
        modifiedItems[index].changeable = false;
        setItems(modifiedItems);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const handleOnBlur = itemId => {
    return () => {
      submitModifiedName(itemId);
    };
  };

  const handleItemEnter = itemId => {
    return ({ key }) => {
      if (key !== 'Enter') {
        return;
      }
      submitModifiedName(itemId);
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
      (async () => {
        try {
          const { status } = await axios.put(requestURI);
          if (status !== 201) {
            return;
          }
          setItems(modifiedItems);
          setActiveCount(isCompleted ? activeCount + 1 : activeCount - 1);
        } catch (error) {
          console.error(error);
        }
      })();
    };
  };

  const handleItemDelete = itemId => {
    return () => {
      // itemId에 맞는 index 찾아서 제거한 뒤 api 요청
      const index = items.findIndex(value => value.itemId === itemId);
      const isCompleted = items[index].completeFlag;
      (async () => {
        try {
          const { status } = await axios.delete(
            `/api/${isCompleted ? 'completed' : 'active'}/${itemId}`,
          );
          if (status !== 201) {
            return;
          }
          const modifiedItems = items.filter(value => value.itemId !== itemId);
          setItems(modifiedItems);
          setItemCount(itemCount - 1);
          setActiveCount(isCompleted ? activeCount : activeCount - 1);
        } catch (error) {
          console.error(error);
        }
      })();
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
          {items
            .filter(value => {
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
            })
            .map((value, index) => {
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
