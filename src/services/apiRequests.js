import axios from "axios";
import {baseURL} from "../urls/urls";



export const apiRequest = axios.create({baseURL})