import { Router } from 'express';
import {
  firstFilter,
  createOwner,
  secondFilter,
  thirdFilter,
  fourthFilter,
  fifthFilter,
} from '../controllers/carController';

const router = Router();

router.post('/', async function(req, res) {
  try {
    const newOwner = await createOwner(req.body);
    return res.status(200).json({ message: 'success', newOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/', function(_req, res, _next) {
  const message = 'Hello World';

  res.status(200).json({ message });
});

router.get('/1', async function(_req, res) {
  try {
    const carOwner = await firstFilter();
    if (!carOwner) {
      return res.status(400).json({ message: 'Unable to retrieve data' });
    }
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/2', async function(_req, res) {
  try {
    const carOwner = await secondFilter();
    if (!carOwner) {
      return res.status(400).json({ message: 'Unable to retrieve data' });
    }
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/3', async function(_req, res) {
  try {
    const carOwner = await thirdFilter();
    if (!carOwner) {
      return res.status(400).json({ message: 'Unable to retrieve data' });
    }
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/4', async function(_req, res) {
  try {
    const carOwner = await fourthFilter();
    if (!carOwner) {
      return res.status(400).json({ message: 'Unable to retrieve data' });
    }
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/5', async function(_req, res) {
  try {
    const carOwner = await fifthFilter();
    if (!carOwner) {
      return res.status(400).json({ message: 'Unable to retrieve data' });
    }
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

export default router;
