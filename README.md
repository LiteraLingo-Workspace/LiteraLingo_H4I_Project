# LiteraLingo

[![language](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/)

## Table of Contents

- [About](#-about)
- [How to Run](#-how-to-run)
- [Documentation](#-documentation)
- [License](#-license)
- [Contact](#%EF%B8%8F-contact)

## ❓ About

**LiteraLingo** is a service to help individuals with autism learn figurative language.

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

# Install dependencies
npm i

# Add the appropriate environment variables

# For NEXTAUTH_SECRET, run the following in the terminal and paste the output
openssl rand -base64 32

# For GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET, you must generate Google Cloud OAuth 2.0 Client IDs. See details below (https://console.cloud.google.com)
# Once you've done so, paste them in

# Start the dev server
npm run dev


# Start the backend
# Ensure your PostgreSQL CLI is set up correctly by creating a role, password, and database corresponding to the connection string in env.js (database should be called literalingo, username can be postgres, password can be password123)

# Connect to your database via the CLI with:
psql <your-connection-string-here> OR
psql -U postgres -D literalingo

# Grant permissions to yourself from your superuser:
# example below: if your username is postgres:
GRANT CREATE ON SCHEMA public TO postgres;

# Ensure you can create a table by running:
CREATE TABLE xyz (a VARCHAR(100));

# Verify the table was created with:
\dt

# If successful, delete the table with:
DROP xyz;

# Run the following script to start the containerized backend
./start-database.sh

# Sync up your Prisma schema with your db
npx prisma db push

```

## 📚 Documentation

### How to format your code

Use Prettier for formatting. The default settings are fine.

### How to create components

Ensure that your component is declared in the following way for faster TypeScript compilation speeds:

`export const ComponentName: React.FC<ComponentNameProps> = ({ ...props... }) => {}`

### How to organize components

Components and their corresponding styling files are stored in the same directory for ease of use and development under the `src/app/_components` directory

To create a page, create a file called `page.tsx` in a new directory under `src/app`. The name of the folder will correspond to the URL endpoint of the page. For example, if you create a directory called `scr/app/users`, then you access the content of this directory on the browser under `localhost:3000/users`. The newly created `page.tsx` tells Next.js what the main content of the page at that URL will be.

![Next.js page routing diagram](documentation-pic1.png)

For more information about dynamic page routing, see the [Next.js docs](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)

### Creating Google Cloud APIs

Open [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create a project, and create an OAuth consent screen. Add your own Google Account as a test user.

Switch to the credentials page, click create credentials, then OAuth Client ID. Set Application type to Web Application, `http://localhost:3000` as an authorized JavaScript origin, and `http://localhost:3000/api/auth/callback/google` as an Authorized Redirect URL.

### Creating Discord APIs

[Register a developer application](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications) and retrieve your client ID and client secret. In the **OAuth2** tab of your newly registed application, Add `http://localhost:3000/api/auth/callback/discord` as a Redirect URL.

### Sending HTTP requests from the frontend

View the example file in `src/app/_components/user.tsx` for an example about how you can make an endpoint call from the frontend.

### Testing your endpoints with Postman

To test an endpoint, send a request to `localhost:3000/api/trpc/{ROUTERNAME}.{ROUTERMETHODNAME}?batch=1` <br/>
If you're sending a POST request, the payload must be appended to the URL as `&input={...}` rather than sent as part of the request body.

For example, to say hello to a user based on their name, send a GET request to `http://localhost:3000/api/trpc/test.hello?batch=1&input={"0":{"json": {"text": "World"}}}` with no payload body.

All `ROUTERNAME`s are specified under `src/server/api/routers` and all `ROUTERMETHODNAME`s can be found under the respective router file (e.g. the `hello`, method in the previous example can be found in `src/server/api/routers/test.tsx`).

To learn more, see the [tRPC docs](https://trpc.io/docs/rpc).

## 📃 License

This project is licensed under the terms of the MIT License.

## 🗨️ Contact

If you have any inquiries about the development of this project, you can reach the Hack4Impact McGill chapter at:

- **Email**: hack4impact@ssmu.ca
