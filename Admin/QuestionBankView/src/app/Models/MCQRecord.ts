export class MCQRecord{

  public questionText : any;
  public options: MCQOption[]= [];
  public conceptTags = [];
  public difficultyLevel : any;
  public domain : any;
  public taxonomy : any;
  public questionType : any;
  public correctAnswer : MCQOption;
}

export class MCQOption {
  public optionText : any;
}
