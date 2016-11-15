import { Router } from 'express';

const userList = {
  users: [
    { avatar: 'http://xxx.com', name: 'John', age: 23 },
    { avatar: 'http://xxx.com', name: 'Amy', age: 18 },
  ]
};
const router = new Router();
// Write your restful api here:
router.get('/users', (req, res) => {
  res.json(userList);
});
router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const users = userList.users;

  if (isNaN(id)) res.json({ error: 'non-numerical id' });
  else if (id !== parseInt(id, 10)) res.json({ error: 'non-integer id' });
  else if ((id < 1) || (id > users.length)) res.json({ error: 'id out of range' });
  else res.json(users[id - 1]);
});

export default router;
