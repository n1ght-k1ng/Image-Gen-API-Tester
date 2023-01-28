# Image-Gen API Tester

This is a React App for interacting with **openai's DALL-E API**, allowing you to easily generate images from text descriptions.
## Installation

To install the library, simply run:

`npm install openai`

### Usage

To use the library, you will first need to obtain an API key from openAI . Once you have your key, you can place it in  your `.env` file. 

The `generateImage` function takes a text description as its input and returns a promise that resolves to the generated image. The response will include the image data, as well as any other relevant information such as the image URL.

You can also pass additional parameters such as model, size, top_k and response_format

### javascript

```
> client.generateImage('A cat sitting on a windowsill', { model: 'image-alpha-001', size: 512, top_k: 5, response_format: 'url' }).then(response => {
>   console.log(response);
> });
```


### License

This library is provided under the MIT license. See LICENSE for more details.
