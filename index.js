// Documentation for Reference
// https://nodejs.dev/en/learn/the-nodejs-event-emitter/


const EventEmitter = require('events');

// Create a custom class that extends EventEmitter
class TemperatureSensor extends EventEmitter {
  constructor() {
    super();
    this.temperature = 0;
  }

  // Simulate temperature changes
  changeTemperature(newTemperature) {
    this.temperature = newTemperature;
    this.emit('temperatureChange', this.temperature);
  }
}

// Create an instance of the TemperatureSensor
const temperatureSensor = new TemperatureSensor();

// Subscribe to temperatureChange event
temperatureSensor.on('temperatureChange', (temperature) => {
  console.log(`Temperature changed to ${temperature}°C`);

  // Check if the temperature exceeds a certain threshold
  if (temperature > 30) {
    console.log('High temperature alert!');
    temperatureSensor.emit('highTemperatureAlert', temperature);
  }

  if (temperature < 10) {
    console.log('Low temperature alert!');
    temperatureSensor.emit('lowTemperatureAlert', temperature);
  }
});

// Subscribe to highTemperatureAlert event
temperatureSensor.on('highTemperatureAlert', (temperature) => {
  console.log(`High temperature alert: ${temperature}°C`);
});

// Subscribe to lowTemperatureAlert event
temperatureSensor.on('lowTemperatureAlert', (temperature) => {
  console.log(`Low temperature alert: ${temperature}°C`);
});

// Simulate temperature changes
temperatureSensor.changeTemperature(25);
temperatureSensor.changeTemperature(5);
temperatureSensor.changeTemperature(35);
