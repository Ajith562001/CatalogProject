import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'short'
})
export class shpipe implements PipeTransform{
    transform(value: any) {
        return value.substr(0,4);
        
    }
}