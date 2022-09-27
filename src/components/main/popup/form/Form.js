import Input from "../../../Inputs/Input";
import SelectInput from "../../../Inputs/SelectInput";
import ErrorMessage from "../../../errors/ErrorMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi, setIsSubmitted } from "../../../../store/reducers/formSlice";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const dispatch = useDispatch();
  const [filteredFonts, setFilteredFonts] = useState([]);
  const fonts = useSelector((state) => state.form.fonts);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      font: "",
    },
  });

  const filterFonts = (data) => {
    const filteredData = data
      .filter((item) => item.category !== "monospace")
      .sort((x, y) => x.family.localeCompare(y.family))
      .map((item) => {
        return { ...item, value: item.family, label: item.family };
      });

    setFilteredFonts(filteredData);
  };
  const onSubmit = (data) => dispatch(setIsSubmitted(data));
  useEffect(() => {
    dispatch(getApi());
  }, []);

  useEffect(() => {
    filterFonts(fonts);
  }, [fonts]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="name"
        control={control}
        rules={{
          required: { value: true, message: "This field is required." },
        }}
        render={({ field }) => <Input {...field} placeholder="Your Name" />}
      />
      {errors.name && <ErrorMessage message={errors.name.message} />}
      <Controller
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "This fieald is required." },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address.",
          },
        }}
        render={({ field }) => (
          <Input {...field} placeholder="Email" type="email" />
        )}
      />
      {errors.email && <ErrorMessage message={errors.email.message} />}
      <Controller
        name="font"
        control={control}
        rules={{
          required: { value: true, message: "This field is required." },
        }}
        render={({ field }) => (
          <SelectInput {...field} options={filteredFonts} />
        )}
      />
      {errors.font && <ErrorMessage message={errors.font.message} />}
      <button type="submit">GET MY 30% OFF</button>
    </form>
  );
};

export default Form;
