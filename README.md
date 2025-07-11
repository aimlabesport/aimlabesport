!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aimlab Esport Tournament Registration</title>

  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Orbitron', sans-serif;
      background: url('suraj.png') no-repeat center center fixed;
      background-size: cover;
      color: white;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    body::before {
      content: "";
      position: absolute;
      top:0; left:0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      z-index: 0;
    }
    .container {
      position: relative;
      z-index: 1;
      background: rgba(0,0,0,0.3);
      padding: 30px 25px;
      border-radius: 15px;
      box-shadow: 0 0 15px #636666;
      max-width: 400px;
      width: 90%;
    }
    h2 {
      text-align: center;
      color: #ddec01;
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #e4fa1c;
      border-radius: 8px;
      font-size: 16px;
      background: rgba(0,0,0,0.2);
      color: white;
    }
    input::placeholder {
      color: #ccc;
    }
    input:focus { outline: none; box-shadow: 0 0 10px #e4fa1c; }
    button {
      width: 100%;
      padding: 14px;
      margin-top: 20px;
      background: #e4fa1c;
      color: #000;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s ease;
    }
    button:hover { background: #00b3b3; }
    .footer {
      text-align: center;
      margin-top: 15px;
      font-size: 12px;
      color: #aaa;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Tournament Registration</h2>
    <form id="registrationForm">
      <input type="text" id="name" placeholder="Full Name" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="tel" id="phone" placeholder="Phone Number" pattern="[0-9]{10}" title="10 digit phone number" required>
      <input type="text" id="gameUid" placeholder="Game UID" required>
      <button type="submit">Pay Entry Fee</button>
    </form>
    <div class="footer">© 2025 Aimlab Esport</div>
  </div>

  <script>
    document.getElementById('registrationForm').addEventListener('submit', function(e){
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const gameUid = document.getElementById('gameUid').value.trim();

      if(!name || !email || !phone.match(/^[0-9]{10}$/) || !gameUid){
        alert("Please fill all fields correctly.");
        return;
      }

      var options = {
        "key": "rzp_test_ZB7PhFgGWCoqgR", // 🔴 Replace with your Razorpay key_id
        "amount": 1000, // Amount in paise. 10 INR = 1000 paise
        "currency": "INR",
        "name": "Aimlab Esport",
        "description": "Tournament Entry Fee",
        "image": "https://yourdomain.com/logo.png", // 🔴 Optional: replace with your logo
        "handler": function (response){
          window.location.href = `success.html?payment_id=${response.razorpay_payment_id}&name=${name}&gameUid=${gameUid}`;
        },
        "prefill": {
          "name": name,
          "email": email,
          "contact": phone
        },
        "theme": {
          "color": "#e4fa1c"
        }
      };

      var rzp1 = new Razorpay(options);
      rzp1.open();
    });
  </script>

</body>
</html>

