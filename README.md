QR
==
    
The frontend for project QR.

Table of Contents
=================

- [Overview](#overview)
- [Dependencies](#dependencies)
- [Frontend Design](#frontend-design)
- [Deployment](#deployment)
- [Links](#links)

Overview
========

The frontend of the Check-In Web Application is a responsive, multi-page interface designed to facilitate smooth and secure event participant management. It features an intuitive layout that adapts across devices and includes in-browser QR code scanning to streamline check-ins. Role-based access control is enforced through client-side token decoding, ensuring users only see and interact with features relevant to their permissions. The application uses dynamic routing to provide a seamless experience for different user roles and enhancing reliability during live events. Additionally, the app is built as a Progressive Web App (PWA), allowing it to run emulated on mobile devices with native-like behavior, enabling home screen installation, and faster load times.

Dependencies
============

## Frontend Framework
* `React` – Core library for building a dynamic and component-based user interface.
* `React DOM` – Bridges React with the browser's DOM rendering.

## Routing
* `React Router DOM` – Enables declarative client-side routing for multi-page navigation.

## Styling & UI
* `Tailwind CSS` – Utility-first CSS framework for responsive and custom UI design.
* `@tailwindcss/vite` – Seamless integration of Tailwind CSS with the Vite build tool.
* `React Icons` – Provides a wide set of icon components for consistent visual design.

## QR Code Scanning
* `html5-qrcode` – Enables real-time in-browser QR code scanning using device cameras, used for attendee check-ins.

## Authentication & Access Control
* `jwt-decode` – Parses and decodes JSON Web Tokens in the frontend to manage user sessions and enforce role-based UI access.

Frontend Design
===============

Given the simplicity of the frontend, only one wireframe has been designed for demonstration purposes.

## ScannerPage - HistoryView Wireframe
![ScannerPage - HistoryView Wireframe](./public/ScannerPage%20-%20HistoryView%20Wireframe.png)

Deployment
==========

The frontend is deployed through Vercel

Links
=====

Frontend Web-Link: https://qr-frontend-adidas.vercel.app