const calculatorRadios = document.querySelectorAll('input[name="calculator"]');
const calculatorContainers = document.querySelectorAll(".calculator");

// 중복 체크 방지
calculatorRadios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    calculatorContainers.forEach((container, i) => {
      container.classList.remove("active");
    });
    if (radio.checked) {
      calculatorContainers[index].classList.add("active");
    }
  });
});

// 운동량 계산 함수
function calculateMomentum() {
  const massInput = document.getElementById("mass");
  const velocityInput = document.getElementById("velocity");
  const mass = parseFloat(massInput.value);
  const velocity = parseFloat(velocityInput.value);

  if (isNaN(mass) || isNaN(velocity)) {
    document.getElementById("momentumResult").textContent = "Please enter valid values.";
    return;
  }

  const momentum = mass * velocity;
  document.getElementById("momentumResult").textContent = `운동량: ${momentum.toFixed(2)} kg·m/s`;
}

// 운동량 계산 버튼 클릭 이벤트 리스너 추가
document.getElementById("calculateMomentum").addEventListener("click", calculateMomentum);

// 충격량 계산 함수
function calculateImpulse() {
  const forceInput = document.getElementById("force");
  const timeInput = document.getElementById("time");
  const force = parseFloat(forceInput.value);
  const time = parseFloat(timeInput.value);

  if (isNaN(force) || isNaN(time)) {
    document.getElementById("impulseResult").textContent = "유효한 값을 입력해주세요.";
    return;
  }

  const impulse = force * time;
  document.getElementById("impulseResult").textContent = `충격량: ${impulse.toFixed(2)} N·s`;
}

// 충격량 계산 버튼 클릭 이벤트 리스너 추가
document.getElementById("calculateImpulse").addEventListener("click", calculateImpulse);

// 충돌 계산 함수
function calculateCollision() {
  const mass1Input = document.getElementById("mass1");
  const velocity1Input = document.getElementById("velocity1");
  const mass2Input = document.getElementById("mass2");
  const velocity2Input = document.getElementById("velocity2");

  const mass1 = parseFloat(mass1Input.value);
  const velocity1 = parseFloat(velocity1Input.value);
  const mass2 = parseFloat(mass2Input.value);
  const velocity2 = parseFloat(velocity2Input.value);

  if (isNaN(mass1) || isNaN(velocity1) || isNaN(mass2) || isNaN(velocity2)) {
    document.getElementById("collisionResultMomentum").textContent = "유효한 값을 입력해주세요.";
    document.getElementById("collisionResultVelocity").textContent = "";
    return;
  }

  const velocity1Prime =
    ((mass1 - mass2) / (mass1 + mass2)) * velocity1 + ((2 * mass2) / (mass1 + mass2)) * velocity2;
  const velocity2Prime =
    ((2 * mass1) / (mass1 + mass2)) * velocity1 + ((mass2 - mass1) / (mass1 + mass2)) * velocity2;

  const momentum1Prime = mass1 * velocity1Prime;
  const momentum2Prime = mass2 * velocity2Prime;
  const totalMomentumPrime = momentum1Prime + momentum2Prime;

  document.getElementById(
    "collisionResultMomentum"
  ).textContent = `충돌 후 총 운동량: ${totalMomentumPrime.toFixed(2)} kg·m/s`;
  document.getElementById(
    "collisionResultVelocity"
  ).textContent = `물체 1 충돌 후 속도: ${velocity1Prime.toFixed(
    2
  )} m/s, 물체 2 충돌 후 속도: ${velocity2Prime.toFixed(2)} m/s`;
}

// 충돌 계산 버튼 클릭 이벤트 리스너 추가
document.getElementById("calculateCollision").addEventListener("click", calculateCollision);
