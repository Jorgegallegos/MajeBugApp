  /*{
  "title": "string",
  "body": "string",
  "isFixed": true,
  "stepsToReproduce": "string",
  "severity": 0
}*/ 
export class Bug {
    //propiedades
    constructor(
        public title='',
        public body='',
        public isFixed=false,
        public stepsToReproduce = '',
        public severity=1
    ){
            
    }
}
