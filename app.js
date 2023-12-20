const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.BACKEND_PORT || 3001;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster_name = process.env.MONGODB_CLUSTER;

const uri = `mongodb+srv://${username}:${password}@${cluster_name}/?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

const database = client.db('course_catalog');

app.get('/', (_, res) => {
    res.send(`Successfully connected to MongoDB!`);
});

app.get('/python', async (_, res) => {
    try {
        const python = database.collection('python');
        const pythonCourses = await python.find({}).toArray();
        res.json(pythonCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching python data' });
    }
});

app.get('/reactjs', async (_, res) => {
    try {
        const reactjs = database.collection('reactjs');
        const reactjsCourses = await reactjs.find({}).toArray();
        res.json(reactjsCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reactjs data' });
    }
});

app.get('/flutter', async (_, res) => {
    try {
        const flutter = database.collection('flutter');
        const flutterCourses = await flutter.find({}).toArray();
        res.json(flutterCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching flutter data' });
    }
});

app.get('/docker_kubernetes', async (_, res) => {
    try {
        const dockerKubernetes = database.collection('docker_kubernetes');
        const dockerKubernetesCourses = await dockerKubernetes.find({}).toArray();
        res.json(dockerKubernetesCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching docker_kubernetes data' });
    }
});

app.get('/excel', async (_, res) => {
    try {
        const excel = database.collection('excel');
        const excelCourses = await excel.find({}).toArray();
        res.json(excelCourses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching excel data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});