const FILE_SIZE = 100,//Mb
      AVATAR_FILE_SIZE = 3,//Mb
      AVATAR_FILE_TYPES_VALIDATION = ["image/jpeg", "image/png"],
      ALLOWED_FILE_TYPES = [".jpg", ".png", ".pdf", ".doc", ".docx", ".rar", ".zip"],
      ALLOWED_FILE_TYPES_VALIDATION = ["image/jpeg", "image/png", "application/pdf", "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.rar",
        "application/zip", "application/x-zip-compressed"],
      ACCOUNT_REGEX = new RegExp(/^[a-zA-Z0-9.,&+_-]+( [a-zA-Z0-9.,&+_-]+)*$/),
      CODE_REGEX = new RegExp(/\d{4}/),
      EMAIL_REGEX = new RegExp(/^[A-Za-z0-9.+_-]+@[A-Za-z0-9._-]+\.[a-zA-Z]+$/),
      PASSWORD_REGEX = new RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=])[\w\d@#$%^&+=]{8,}$/),
      PHONE_NUMBER_REGEX = new RegExp(/^\+\d{1,15}?$/),
      WEBSITE_REGEX = new RegExp(/(?:[-]?[\w])+[.]{1,2}[\w]+/);

export { FILE_SIZE, AVATAR_FILE_SIZE, AVATAR_FILE_TYPES_VALIDATION, ALLOWED_FILE_TYPES,
  ALLOWED_FILE_TYPES_VALIDATION, ACCOUNT_REGEX, CODE_REGEX, EMAIL_REGEX, PASSWORD_REGEX,
  PHONE_NUMBER_REGEX, WEBSITE_REGEX }
      