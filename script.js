async function register(event) {
    event.preventDefault();
    // console.log("register");
    const enter_domain = document.getElementById('enter_domain').value

    // console.log(enter_domain, password);

    const data = {
        domain: enter_domain,
    }
    console.log(data)
    const register = await fetch('http://localhost:2000/imageDownload', {
        method: "POST",
        body:JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const _data = await register.json()
    // console.log({_data});
    if(_data.status === "success"){
        document.getElementById('notification').innerHTML = _data.message
    }
    else{
        document.getElementById('notification').innerHTML = _data.message
    }

  }

  const form = document.getElementById('submit');
  form.addEventListener('submit', register);