import { useForm } from "react-hook-form"
import {userService} from "../../services/userService";

export default function UserForm() {
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
        try {
            const response = await userService.createUser(data);
            console.log(response.data);
            reset();
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Full Name" {...register("name", { required: "This field is required." })} />
            <input placeholder="Username" {...register("username", { required: "This field is required." })} />
            <input placeholder="Email" type="email" {...register("email", { required: "This field is required." })} />

            <input placeholder="Street" {...register("address.street", { required: "This field is required." })} />
            <input placeholder="Suite" {...register("address.suite")} />
            <input placeholder="City" {...register("address.city", { required: "This field is required." })} />
            <input placeholder="Zipcode" {...register("address.zipcode", { required: "This field is required." })} />
            <input placeholder="Latitude" {...register("address.geo.lat")} />
            <input placeholder="Longitude" {...register("address.geo.lng")} />

            <input placeholder="Phone" {...register("phone")} />
            <input placeholder="Website URL" {...register("website")} />

            <input placeholder="Company Name" {...register("company.name", { required: "This field is required." })} />
            <input placeholder="Catch Phrase" {...register("company.catchPhrase")} />
            <input placeholder="Business" {...register("company.bs")} />

            <button type="submit">Register</button>

            <button type="button" onClick={() => reset()}>Reset Form</button>
        </form>
    );
}