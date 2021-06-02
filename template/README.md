# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) --template typescript. it has tailwindcss with few plugin and removes some boilerplate code.

## Tailwindcss
Tailwindcss is a utility first css framework that helps build and compose design in the HTML markup.

### Tailwindcss plugin used
- [typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss-elevation](https://github.com/jonaskay/tailwindcss-elevation)
- [tailwindcss-gradients](https://github.com/benface/tailwindcss-gradients)
- [tailwindcss-border-gradients](https://github.com/cossssmin/tailwindcss-border-gradients)
- [tailwindcss-debug-screens](https://github.com/jorenvanhee/tailwindcss-debug-screens)
- [tailwindcss-scroll-snap](https://github.com/innocenzi/tailwindcss-scroll-snap)

## Available Scripts
All script available in `create-react-app` are available as well
`npm run start`

## tip 
If you are working with images then use responsive images generator, by installing [Image Processing Pipeline](https://www.npmjs.com/package/@ipp/cli) and than `ipp -i your_image_path -o src/Asssets/images` to automatically generate different optimized web images for different screen size. after that include the generated images with: 

```jsx
import React, { Component } from 'react';

import splashMd from "./Asssets/images/splash-md.webp"
import splashSm from "./Asssets/images/splash-sm.webp"
import splashLg from "./Asssets/images/splash-lg.webp"
import splashXl from "./Asssets/images/splash-xl.webp"

class Splash extends Component
{
    render()
    {
        return (
            <div className='absolute z-n2 flex justify-center'>
                <img className={`min-w-screen min-h-screen object-cover `} src={splashMd} srcSet={ `${splashSm} 300w, ${splashMd} 768w, ${splashLg} 1280w, ${splashXl} 1400w`} alt='Splash' />
            </div>
        );
    }
}
``` 