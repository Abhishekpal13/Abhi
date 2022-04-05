/**
 *
 * @namespace faker.dog
 */
var Dog = function (faker) {
  var self = this;

  /**
   * dogsName
   *
   * @method faker.dog.dogsName
   * @param {string} format
   * @memberOf faker.dog
   */
  self.dogsName = function (format) {
      format = format || faker.dog.dogsName();
      return faker.helpers.replaceSymbolWithBreed(format);
  };

  // FIXME: this is strange passing in an array index.
  /**
   * dogsBreed
   *
   * @method faker.dog.dogsBreed
   * @param dogsBreed
   * @memberOf faker.dog
   */
  self.dogsBreed = function (dogsBreedArrayIndex) {
      dogsBreedArrayIndex = dogsBreedArrayIndex || 0;
      return faker.helpers.replaceSymbolWithNumber(faker.definitions.phone_number.formats[phoneFormatsArrayIndex]);
  };

 
};

module['exports'] = Dog;
