# LiteraLingo

[![language](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/)

## Table of Contents

- [About](#-about)
- [How to Run](#-how-to-run)
- [Documentation](#-documentation)
- [License](#-license)
- [Contact](#%EF%B8%8F-contact)

## ❓ About

**LiteraLingo** is a service designed to provide...

## 📝 How to Run

To run the app, follow these steps:

```shell
# Clone the repository
git clone https://github.com/Angelawork/LiteraLingo_H4I_Project.git

# Navigate to the project directory
cd LiteraLingo_H4I_Project

# Check that Docker is installed
docker -v

# Start the frontend

# Install dependencies and start the dev server
npm i && npm run dev

# Start the backend

# Run the following script to start the containerized backend
./start-database.sh

```

### Database
```shell
# Ensure that database is synced with schemas
npx prisma db push

# Seeding the database
npm run seed

# Testing that the seed worked
npm run seed-test

```


## 📚 Documentation

### How to format your code

Use Prettier for formatting. Default settings are fine

### How to create components

Ensure that your component is declared in the following way for faster TypeScript compilation speeds:

`export const ComponentName: React.FC<ComponentNameProps> = ({ ...props... }) => {}`

### How to organize components

Components and their corresponding styling files are stored in the same directory for ease of use and development under the `src/app/_components` directory

To create a page, create a file called `page.tsx` in a new directory under `src/app`. The name of the folder will correspond to the URL endpoint of the page. For example, if you create a directory called `scr/app/users`, then you access the content of this directory on the browser under `localhost:3000/users`. The newly created `page.tsx` tells Next.js what the main content of the page at that URL will be.

![Next.js page routing diagram](documentation-pic1.png)

For more information about dynamic page routing, see the [Next.js docs](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)

## 📃 License

LiteraLingo is licensed under...

## 🗨️ Contact

For more details about our product, service, or any general information regarding LiteraLingo, feel free to reach out to us. We are here to provide support and answer any questions you may have. Below is the best way to contact us:

- **Email**: Send us your inquiries or support requests at...
