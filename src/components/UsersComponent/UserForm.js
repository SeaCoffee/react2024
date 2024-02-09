import { useForm } from "react-hook-form"
import {userService} from "../../services/userService";

export default function UserForm() {
    const { register, handleSubmit,reset } = useForm()
    const registration = async (data) => {
        try {
            const response = await userService.createUser(data)
            reset()
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <form onSubmit={handleSubmit(registration)}>

            <input placeholder="Full Name" {...register("name", { required: "required field" })} />
            <input placeholder="Username" {...register("username", { required: "required field" })} />
            <input placeholder="Email" type="email" {...register("email", { required: "required field" })} />
            <input placeholder="Street" {...register("address.street", { required: "required field" })} />
            <input placeholder="Suite" {...register("address.suite", { required: "required field" })} />
            <input placeholder="City" {...register("address.city", { required: "required field" })} />
            <input placeholder="Zipcode" {...register("address.zipcode", { required: "required field" })} />
            <input placeholder="Phone" {...register("phone", { required: "required field" }) } />

            <input placeholder="Company Name" {...register("company.name", { required: "required field" })} />


            <button type="submit">Register</button>

            <button type="button" onClick={() => reset()}>Reset</button>
        </form>
    );
}