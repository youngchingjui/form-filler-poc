# Server Deployment Guide

This document explains how to deploy and manage the Form Filler application on the server.

## Building the Application

Whenever there are changes to the application, or to deploy the application, you only need to build it. It is served as a static file.
To build the application, run:

```bash
npm run build
```

## Relay Server Management

However, to access the RealTime API from the server, you'll need to run the relay server.
The relay server is managed by systemd. Here are the common commands to manage the service:

### Check Service Status

```bash
sudo systemctl status form-filler-relay.service
```

### Start the Service

```bash
sudo systemctl start form-filler-relay.service
```

### Stop the Service

```bash
sudo systemctl stop form-filler-relay.service
```

### Restart the Service

```bash
sudo systemctl restart form-filler-relay.service
```

### Enable Service to Start on Boot

```bash
sudo systemctl enable form-filler-relay.service
```

### View Service Logs

```bash
sudo journalctl -u form-filler-relay.service
```
