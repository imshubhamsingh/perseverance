class CustomError extends Error {
  customData: any;
  constructor(errorName: string, message: string, customData?: any) {
    super(message);
    this.name = errorName;
    this.customData = customData;
  }
}

export default CustomError;
