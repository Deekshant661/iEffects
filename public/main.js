//importing a file is an asynchronous function. 
//That's why we have used the init keyword

async function init() {
  let rustApp = null;

  try {
    rustApp = await import('../pkg');
  } catch (e) {
    console.error(e);
    return;
  }

  console.log(rustApp);

  const input = document.getElementById('upload');
  const fileReader = new FileReader();

  // Triggered when file is loaded
  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    let image_data_url = null;

    if (currentEffect === 'grayscale') {
      image_data_url = rustApp.grayscale(base64);
    } else if (currentEffect === 'blur') {
      image_data_url = rustApp.blur(base64);
    }

    if (image_data_url) {
      document.getElementById('new-img').setAttribute('src', image_data_url);

      //show reload msg
      document.getElementById('info-msg').classList.remove('hidden');
    }
    

    currentEffect = null; // Reset after applying
  };

  // 🖱️ Effect button click handlers
  document.getElementById('grayscale-btn').addEventListener('click', () => {
    currentEffect = 'grayscale';
    input.click(); // Trigger upload
  });

  document.getElementById('blur-btn').addEventListener('click', () => {
    currentEffect = 'blur';
    input.click(); // Trigger upload
  });

  // 🎯 When file is chosen
  input.addEventListener('change', () => {
    if (input.files.length > 0) {
      fileReader.readAsDataURL(input.files[0]);
    }
  });
}

init();


