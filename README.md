# Next.js Social Casino Application

This project is a customizable, themeable web application built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/), styled with [styled-components](https://styled-components.com/). The project allows for extensive customization based on customer configurations, enabling control over color schemes, fonts, layouts, logos, and visibility of specific components like banners and footer.

## Demo Version (Vercel)

The Demo version can be seen on this url [Social casino demo](https://social-casino-rosy.vercel.app/)

## Getting Started

To get started with this project, clone the repository and install dependencies:

````bash
git clone https://github.com/gbatsashvili/social-casino
cd social-casino
npm install

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

## Features

- **Theming and Customization**: Easily adjust colors, fonts, logos, and layout styles using a theme configuration.
- **Configurable Layout**: Control the style of the sidebar and app bar as well as the visibility of the banner and footer.
- **Customer-Specific Configurations**: Choose from predefined configurations for different customers:
  - **Customer A**: Uses a default theme similar to `customerA` settings.
  - **Customer B**: Features an app bar layout with the footer hidden.
  - **Customer C**: Uses an app bar layout with both the banner and footer hidden.

## URL-Based Theming

To view the app with different customer configurations, simply append the customer identifier to the URL path. The available customer configurations are:

Customer A (default theme): /customerA
Customer B (with app bar layout and hidden footer): /customerB
Customer C (with app bar layout and hidden banner and footer): /customerC
For example:

- To see the theme and layout for Customer A, navigate to:
  http://localhost:3000/customerA

- To see the theme and layout for Customer B, navigate to:
  http://localhost:3000/customerB

- To see the theme and layout for Customer C, navigate to:
  http://localhost:3000/customerC

## Project Structure

\*\* /public: Static assets like images and icons.

- /components: Reusable UI components (e.g., Sidebar).
- /configs: Contains the json config samples.
- /lib: Contains utility functions and custom hooks (e.g., theme provider).
- /shared: Contains the shared components.(e.g., Button)
- /pages: Contains the Next.js page components.
- /store: Contains global store
- /styles: Includes global styles and theme settings.
- /types: Contains the global types

## Theming and Configuration

The project includes a dynamic theme and layout configuration system. Customer-specific configurations are defined in JSON files, allowing each customer to have a unique look and feel.

## Theme Settings

You can adjust the following in the theme configuration:

- Colors: Set primary, secondary, and background colors.
- Fonts: Configure font families and sizes.
- Logos: Define customer-specific logos.
- Layouts: Configure styles for sidebar, app bar, and overall layout.

## Visibility Options

The project includes toggles for controlling the visibility of various components, including:

- Banner: show or hide

- Footer: show or hide

## Customer Configurations

The app is pre-configured with three sample customers:

- Customer A: Uses the default theme, matching the default configuration.
- Customer B: Has an app bar layout with the footer hidden.
- Customer C: Features an app bar layout with both the banner and footer hidden.

To switch between customer configurations, update the configuration file associated with the customer in /config.

## Customization

Adding a New Customer Configuration: To add a new customer, create a new JSON configuration file with the desired settings and update the theme provider to load the new configuration.
Modifying Theme and Layout: Update the default theme settings in /styles/theme.ts or individual customer JSON files.

## Example Configuration

Below is an example of a customer configuration file (e.g., customerA.json):

```bash

{
  "layout": "sidebar",
  "footer":"show",
  "banner":"show",
  "logo": "/assets/logo-1.svg",
  "lightTheme":{
    "colors": {
      "background": "#EEF7FF",
      "blackDark": "#7AB2B2",
      "blackLight": "#CDE8E5",
      "text": "#4D869C",
      "white": "#333",
      "blue": "#4D869C",
      "green": "#0fa587",
      "lightGrey": "#2f3031",
      "buttonPrimary": "#EEF7FF",
      "buttonSecondary": "#ffcb8a",
      "btnColorLight": "#333",
      "btnColorDark": "#333"
    },
    "fonts": {
      "primary": "Red Hat Display",
      "secondary": "Roboto",
      "size": "14px"
    }

    },
"darkTheme":{
    "colors": {
      "background": "#1e1e1e",
      "blackDark": "#262626",
      "blackLight": "#232323",
      "text": "#333",
      "white": "#f9f9f9",
      "blue": "#009bff",
      "green": "#0fa587",
      "lightGrey": "#2f3031",
      "buttonPrimary": "#1e1e1e",
      "buttonSecondary": "#ffcb8a",
      "btnColorLight": "#f9f9f9",
      "btnColorDark": "#333"
    },
    "fonts": {
      "primary": "Red Hat Display",
      "secondary": "Roboto",
        "size": "14px"
    }
    }
}
```
