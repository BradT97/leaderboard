# Large Scale Distributed Leaderboard (PoC)

This project is designed to be a self-learning proof of concept regarding how to build a large scale distributed leaderboard as commonly seen in AAA title games.

## Architecture

### Server

The Server will be a Node.js application using Express for the API framework. The server is to be designed 'stateless'.

### Client

The client will communicate to the server via HTTP requests. Where any given client can create a new event -> the server will interpret the event and will publish the event.

### Communication

The project is to be designed using RabbitMQ as a messaging broker between the server(s) and clients. It will be setup so that a message published from the server will be sent to a fan-out AMQP exchange. Whereby each queue is associated with 1 and only 1 client.
