# iEffects
A lightweight web app to apply real-time image filters (like blur, grayscale) directly in the browser using WebAssembly and JavaScript.


![Screenshot 2025-04-08 230558](https://github.com/user-attachments/assets/0823abca-ac4e-490d-bc73-9c20a776ee52)
![Screenshot 2025-04-08 230621](https://github.com/user-attachments/assets/f4995d5c-7d8f-43d5-ae19-09e2630d2eb7)


## Tech Stack

- Rust (compiled to WebAssembly using `wasm-pack`)
- JavaScript
- HTML, CSS
- WebAssembly
- Crates:
  - `wasm-bindgen`
  - `image`
  - `base64`


---

## Features

- Upload PNG images from the local system
- Apply grayscale effect using WebAssembly
- Fast, client-side processing with no backend required
- Planned support for additional effects like blur, brightness, and contrast
- Simple and responsive user interface

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Deekshant661/iEffects.git
cd iEffects
code .
```

### 2. Build the WebAssembly Package
Make sure wasm-pack is installed:
```bash
cargo install wasm-pack
```


### 3. Install npm Dependencies and Run the Application
```bash
npm install
npm run serve
```

### Deployment
The project is deployed using Vercel.
Deployed link: https://i-effects.vercel.app/


