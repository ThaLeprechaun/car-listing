import { Router } from 'express';
import {
  firstFilter,
  createOwner,
  secondFilter,
  thirdFilter,
  fourthFilter,
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

router.get('/first-filter', async function(_req, res) {
  try {
    const carOwner = await firstFilter();
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/second-filter', async function(_req, res) {
  try {
    const carOwner = await secondFilter();
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/third-filter', async function(_req, res) {
  try {
    const carOwner = await thirdFilter();
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/fourth-filter', async function(_req, res) {
  try {
    const carOwner = await fourthFilter();
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

router.get('/fifth-filter', async function(_req, res) {
  try {
    const carOwner = await fourthFilter();
    return res.status(200).json({ message: 'success', carOwner });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

export default router;
