import { Router as expressRouter } from 'express';
import { Item, sequelize } from '../models';

const router = expressRouter();

router.get('/all', async (req, res) => {
  try {
    /*
    {
      "items": [
        {
          "itemId": 0,
          "name" : "string",
          "class" : 0
        }
      ],
      "size": 0,
    }
  */
    const items = await Item.findAll({
      attributes: [['id', 'itemId'], 'name', ['complete_flag', 'completeFlag']],
      where: {
        delete_flag: 0,
      },
    });
    const result = {
      items,
      size: items.length,
    };
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

router.get('/active', async (req, res) => {
  try {
    /*
{
  "items": [
    {
      "itemId": 0,
      "name" : "string",
      "class" : 0
    }
  ],
  "size": 0,
}
     */
    const items = await Item.findAll({
      attributes: [['id', 'itemId'], 'name', ['complete_flag', 'completeFlag']],
      where: {
        delete_flag: 0,
        complete_flag: 0,
      },
    });
    const result = {
      items,
      size: items.length,
    };
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

router.get('/completed', async (req, res) => {
  try {
    /*
{
  "items": [
    {
      "itemId": 0,
      "name" : "string",
      "class" : 0
    }
  ],
  "size": 0,
}
*/
    const items = await Item.findAll({
      attributes: [['id', 'itemId'], 'name', ['complete_flag', 'completeFlag']],
      where: {
        delete_flag: 0,
        complete_flag: 1,
      },
    });
    const result = {
      items,
      size: items.length,
    };
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

router.post('/active', async (req, res) => {
  try {
    /*
    새로 등록시만 
    param: name,
    return: 
{
  "itemId": 0,
  "name": "string",
  "class": 0,
  "create_date": "2019~"
  "modify_date": "2019~"
  "delete_flag": 0
}
    */
    const creationInfo = await Item.create({
      name: req.body.name,
      complete_flag: false,
      create_date: sequelize.fn('NOW'),
      modify_date: sequelize.fn('NOW'),
      delete_flag: false,
    });
    const result = await Item.findOne({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: creationInfo.id,
      },
    });
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

router.put('/active/all', async (req, res) => {
  // active 전체를 completed로 바꿈
  try {
    await Item.update(
      {
        complete_flag: 1,
        modify_date: sequelize.fn('NOW'),
      },
      {
        where: { complete_flag: 0 },
      },
    );
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
});

router.put('/active/:itemId', async (req, res) => {
  try {
    /*
    active의 item의 이름을 바꿈 or active를 completed로 바꿈
    param:  name,move
    return:
{
  "itemId": 0,
  "name": "string",
  "class": 0,
  "create_date": "2019~"
  "modify_date": "2019~"
  "delete_flag": 0
}
  */
    if (req.body.name) {
      await Item.update(
        {
          name: req.body.name,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: { id: req.params.itemId },
        },
      );
    } else {
      await Item.update(
        {
          complete_flag: true,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: { id: req.params.itemId },
        },
      );
    }
    const result = await Item.findOne({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: req.params.itemId,
      },
    });
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
  }
});

router.put('/completed/all', async (req, res) => {
  // completed 전체를 active로 옮김
  try {
    await Item.update(
      {
        complete_flag: 0,
        modify_date: sequelize.fn('NOW'),
      },
      {
        where: { complete_flag: 1 },
      },
    );
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
});

router.put('/completed/:itemId', async (req, res) => {
  try {
    /*
    completed의 이름을 바꿈 or completed를 active로 옮김
    param: name
    return: 
{
  "itemId": 0,
  "name": "string",
  "class": 0,
  "create_date": "2019~"
  "modify_date": "2019~"
  "delete_flag": 0
}
    */
    if (req.body.name) {
      await Item.update(
        {
          name: req.body.name,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: { id: req.params.itemId },
        },
      );
    } else {
      await Item.update(
        {
          complete_flag: false,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: { id: req.params.itemId },
        },
      );
    }
    const result = await Item.findOne({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: req.params.itemId,
      },
    });
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/active/:itemId', async (req, res) => {
  try {
    /*
    return:
{
  "itemId": 0,
  "name": "string",
  "class": 0,
  "create_date": "2019~"
  "modify_date": "2019~"
  "delete_flag": 0
}
*/
    await Item.update(
      {
        delete_flag: true,
        modify_date: sequelize.fn('NOW'),
      },
      {
        where: { id: req.params.itemId },
      },
    );
    const result = await Item.findOne({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: req.params.itemId,
      },
    });
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/completed/all', async (req, res) => {
  try {
    await Item.update(
      {
        delete_flag: true,
        modify_date: sequelize.fn('NOW'),
      },
      {
        where: { complete_flag: 1 },
      },
    );
    /*
    const result = await Item.findAll({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: req.params.itemId,
      },
    });
    res.send(result);
    */
    res.status(201).send();
  } catch (err) {
    console.error(err);
  }
});

router.delete('/completed/:itemId', async (req, res) => {
  try {
    /*
    return:
{
  "itemId": 0,
  "name": "string",
  "class": 0,
  "create_date": "2019~"
  "modify_date": "2019~"
  "delete_flag": 0
}
*/
    await Item.update(
      {
        delete_flag: true,
        modify_date: sequelize.fn('NOW'),
      },
      {
        where: { id: req.params.itemId },
      },
    );
    const result = await Item.findOne({
      attributes: [
        ['id', 'itemId'],
        'name',
        ['complete_flag', 'completeFlag'],
        ['create_date', 'createDate'],
        ['modify_date', 'modifyDate'],
        ['delete_flag', 'deleteFlag'],
      ],
      where: {
        id: req.params.itemId,
      },
    });
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
  }
});

export default router;
