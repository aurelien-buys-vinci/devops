# Participant
 Buys Aurélien
 Temsamani Jawad
 Raza Yasin

# Berlin Clock Kata

This project implements the Berlin Clock, also known as the "Mengenlehreuhr". The Berlin Clock is a clock that tells the time using a series of illuminated colored blocks, representing hours, minutes, and seconds.

## Project Structure

- `app.js`: Contains the main logic for converting time into the Berlin Clock format.
- `spec/appSpec.js`: Contains the unit tests for the functions in `app.js`.

## Functions

- `simpleHours(hours)`: Returns the representation of single hours (1-4) in the Berlin Clock.
- `blockOfFiveHours(hours)`: Returns the representation of blocks of five hours in the Berlin Clock.
- `secondsLamp(seconds)`: Returns the representation of the seconds lamp in the Berlin Clock.
- `SimpleMinute(minutes)`: Returns the representation of single minutes (1-4) in the Berlin Clock.
- `BlockOfFiveMinute(minutes)`: Returns the representation of blocks of five minutes in the Berlin Clock.
- `FinalClock()`: Returns the full Berlin Clock representation for the current time.

## Running Tests

To run the tests, you need to have [Jasmine](https://jasmine.github.io/) installed. You can run the tests using the following command:

```bash
jasmine
