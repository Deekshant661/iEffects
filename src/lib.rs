use base64::{decode, encode};
//base64 converts base64 value in to vector
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    log(&encoded_file.into());
    log(&"Greyscale called:".into());

    let base64_to_vector = decode(&encoded_file).unwrap();
    log(&"Image decoded".into());
    //decode function returns a vector

    let mut image = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());

    image = image.grayscale();
    log(&"Grayscale effect applied".into());

    let mut buffer = vec![];
    image.write_to(&mut buffer, Png).unwrap();
    log(&"New image written".into());

    let encoded_image = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", &encoded_image);

    data_url
}


#[wasm_bindgen]
pub fn blur(encoded_file: &str) -> String {
    log(&encoded_file.into());
    log(&"Blur called:".into());

    let base64_to_vector = decode(&encoded_file).unwrap();
    log(&"Image decoded".into());
    //decode function returns a vector

    let mut image = load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());

    image = image.blur(0.10);
    log(&"Blur effect applied".into());

    let mut buffer = vec![];
    image.write_to(&mut buffer, Png).unwrap();
    log(&"New image written".into());

    let encoded_image = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}", &encoded_image);

    data_url
}