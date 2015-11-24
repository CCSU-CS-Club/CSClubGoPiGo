var Gopigo = require('node-gopigo');

var Commands = Gopigo.commands;
var Robot = Gopigo.robot;

robot = new Robot({
	minVoltage: 5.5,
	criticalVoltage: 1.2,
	debug: true,
	ultrasonicSensorPin: 15,
});

robot.on('init', function onInit(res) {
  if (res) {
    console.log('GoPiGo Ready!')
  } else {
    console.log('Something went wrong during the init.')
  }
});
robot.on('error', function onError(err) {
  console.log('Something went wrong')
  console.log(err)
});
robot.on('free', function onFree() {
  console.log('GoPiGo is free to go')
});
robot.on('halt', function onHalt() {
  console.log('GoPiGo is halted')
});
robot.on('close', function onClose() {
  console.log('GoPiGo is going to sleep')
});
robot.on('reset', function onReset() {
  console.log('GoPiGo is resetting')
});
robot.on('normalVoltage', function onNormalVoltage(voltage) {
  console.log('Voltage is ok ['+voltage+']')
});
robot.on('lowVoltage', function onLowVoltage(voltage) {
  console.log('(!!) Voltage is low ['+voltage+']')
});
robot.on('criticalVoltage', function onCriticalVoltage(voltage) {
  console.log('(!!!) Voltage is critical ['+voltage+']')
});
