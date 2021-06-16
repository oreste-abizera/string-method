import countSpaces from "./countSpaces";

export default function hasSpaces(str: string){

    return countSpaces(str) < 0;

}