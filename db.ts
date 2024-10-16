"use server"
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);
export async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; 
    }
}

export async function disconnect() {
    try {
        await client.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
        throw error; 
    }
}

export async function fetchData(collectionName) {
    try {
        const database = client.db('info');
        const collection = database.collection(collectionName);
        const data = JSON.parse(JSON.stringify(await collection.find({}).toArray()));
        return data;
    } catch (error) {
        console.error(`Error fetching ${collectionName}:`, error);
        return null;
    }
}

export async function getSkills() {
    try {
        const database = client.db('info');
        const collection = database.collection('skills');
        const skills = await collection.find({}).toArray();
        return skills;
    } catch (error) {
        console.error("Error fetching skills data:", error);
        return [];
    }
}

export async function getAbout() {
    try {
        const aboutData = await fetchData('about');
        return aboutData;
    } catch (error) {
        console.error("Error fetching about:", error);
        return null;
    }
}

export async function getEducation() {
    try {
        const education = await fetchData('education');
        return education;
    } catch (error) {
        console.error("Error fetching education:", error);
        return null;
    }
}

export async function getCerts() {
    try {
        const certs = await fetchData('certs');
        return certs;
    } catch (error) {
        console.error("Error fetching certs:", error);
        return null;
    }
}