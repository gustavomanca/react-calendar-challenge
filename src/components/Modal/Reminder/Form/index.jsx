import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import cogoToast from "cogo-toast";
import { Button, Dropdown, TextField } from "components";
import { add, destroy, edit, setCurrent, toggleModal } from "reducers/reminder";
import { getCityKey } from "services/city";
import { getCurrentConditions } from "services/weather";
import { generateUUID } from "utils/uuid";

import { getIconPath, INITIAL_REMINDER_STATE, TIME_OPTIONS } from "./content";
import * as S from "./styles";

function Form({ amountOfDays, reminder, setReminder }) {
  const dispatch = useDispatch();
  const { current } = useSelector(({ reminders }) => reminders);
  const [errors, setErrors] = useState({
    title: "",
    day: "",
    city: "",
    time: "",
  });

  function clear() {
    setReminder(INITIAL_REMINDER_STATE);
    dispatch(setCurrent(null));
    dispatch(toggleModal(false));
  }

  function handleChange(key, value) {
    setErrors((prev) => ({ ...prev, [key]: "" }));
    if (key === "day") {
      const day = handleDay(value);
      return setReminder((prev) => ({ ...prev, day }));
    }
    setReminder((prev) => ({ ...prev, [key]: value }));
  }

  function handleDay(value) {
    const day = value.match(/\d+/g)?.join("");
    if (day && amountOfDays.includes(Number(day))) return day;
    else return "";
  }

  async function handleWeather(query) {
    if (!query) return;

    try {
      const { data } = await getCityKey(query);
      if (!data.length)
        return setReminder((prev) => ({ ...prev, temperature: null }));
      const [city] = data;

      const { data: weatherData } = await getCurrentConditions(city.Key);
      if (!weatherData.length)
        return setReminder((prev) => ({ ...prev, temperature: null }));
      const [weather] = weatherData;

      const weatherInfo = {
        icon: getIconPath(weather.WeatherIcon),
        description: weather.WeatherText,
        temperature: weather.Temperature.Metric.Value,
      };

      setReminder((prev) => ({
        ...prev,
        ...weatherInfo,
      }));
    } catch (error) {
      cogoToast.error(error.response.data);
    }
  }

  function onDeleteReminder(id) {
    dispatch(destroy(reminder.id));
    clear();
    cogoToast.success("Reminder has been deleted!");
  }

  function onSubmit(event) {
    event.preventDefault();

    const [isValid, errors] = validate();

    if (!isValid) {
      const [field] = errors;
      return setErrors((prev) => ({ ...prev, [field]: "Required field" }));
    }

    toggleModal(false);
    if (current) {
      dispatch(edit(reminder));
      cogoToast.success("Reminder has been successfully edited!");
      return clear();
    }
    const id = generateUUID();
    dispatch(add({ ...reminder, id }));
    cogoToast.success("Reminder has been created!");
    clear();
  }

  function validate() {
    const errors = Object.entries(reminder)
      .map(([key, value]) => {
        const bypass = key === "id" || key === "time" || Boolean(value);
        if (bypass) return "";
        return key;
      })
      .filter((each) => Boolean(each));

    if (errors.length) return [false, errors];
    else return [true];
  }

  useEffect(() => {
    if (!current) return setReminder(INITIAL_REMINDER_STATE);
    setReminder((prev) => ({ ...prev, ...current }));
  }, [current]); //eslint-disable-line

  return (
    <form onSubmit={onSubmit}>
      <S.FieldsWrapper>
        <TextField
          error={errors.title}
          value={reminder.title}
          placeholder="Type a title..."
          maxLength={30}
          onChange={({ target }) => handleChange("title", target.value)}
        />
        <TextField
          error={errors.day}
          value={reminder.day}
          placeholder="Type a day..."
          maxLength={2}
          onChange={({ target }) => handleChange("day", target.value)}
        />
        <Dropdown
          options={TIME_OPTIONS}
          placeholder="Pick a time..."
          onChange={({ key }) => handleChange("time", key)}
        />

        <S.CityWrapper>
          <TextField
            error={errors.city}
            value={reminder.city}
            placeholder="Type a city..."
            onBlur={({ target }) => handleWeather(target.value)}
            onChange={({ target }) => handleChange("city", target.value)}
          />
          {reminder.temperature && (
            <S.Conditions>
              <S.ConditionLabel>Current conditions:</S.ConditionLabel>
              <S.ConditionsInfo>
                <S.Temperature>{reminder.temperature}°C</S.Temperature>
                {reminder.icon && (
                  <S.ConditionIcon
                    src={reminder.icon}
                    alt={reminder.description}
                  />
                )}
                <span>({reminder.description})</span>
              </S.ConditionsInfo>
            </S.Conditions>
          )}
        </S.CityWrapper>
      </S.FieldsWrapper>

      <S.Actions>
        <Button type="submit">Save</Button>
        {reminder.id && (
          <S.Delete onClick={() => onDeleteReminder(reminder.id)}>
            Delete
          </S.Delete>
        )}
      </S.Actions>
    </form>
  );
}

export default Form;
