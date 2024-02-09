import { useForm } from "react-hook-form";
import { carsService } from "../../services/carsService";


export default function CarForm({ car }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const sendCarInfo = async (data) => {
        try {
            const response = await carsService.createCar(data)
            console.log(response.data)
            reset()
        } catch (error) {
            console.error(error)
        }
    }

            return (
        <form onSubmit={handleSubmit(sendCarInfo)}>
            <input
                placeholder="Brand"
                {...register("brand", {
                    required: "Brand is required",
                    pattern: {
                        value: /^[a-zA-Zа-яА-ЯёЁіІїЇ]{1,20}$/,
                        message: "Brand must be 1-20 characters and only letters"
                    },
                    maxLength: 20,
                    minLength: 1
                })}
            />
            {errors.brand && <p>{errors.brand.message}</p>}

            <input
                placeholder="Price"
                type="number"
                {...register("price", {
                    required: "Price is required",
                    max: 1000000,
                    min: 0
                })}
            />
            {errors.price && <p>{errors.price.message}</p>}

            <input
                placeholder="Year"
                type="number"
                {...register("year", {
                    required: "Year is required",
                    max: 2023,
                    min: 1990
                })}
            />
            {errors.year && <p>{errors.year.message}</p>}

            <button type="submit" name="action" value="create">Add Car</button>
        </form>
    )
}
