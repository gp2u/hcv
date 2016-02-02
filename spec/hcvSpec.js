var GUIDELINES = ['AUS', 'EASL', 'AASLD', 'FIXHEPC'];
var GENOTYPES = [
  getGenotype('1'),
  getGenotype('1a'),
  getGenotype('1b'),
  getGenotype('2'),
  getGenotype('3'),
  getGenotype('4'),
  getGenotype('5'),
  getGenotype('6')
];
var FIBROSIS = [true, false];
var PAST_TREATMENTS = ['naive', 'PEG', 'PEGRIBA', 'PROTEASE', 'SOFRIBA', 'SOFNS5A'];

function _guidelines() {

  GUIDELINES.forEach(function(guidelines) {
    describe(guidelines + ' guidelines', function() {

      beforeEach(function() {
        this.guidelines = guidelines;
      });

      _genotypes();
    });
  });
}

function _genotypes() {

  GENOTYPES.forEach(function(genotype) {
    describe('Genotype ' + genotype, function() {

      beforeEach(function() {
        this.genotype = genotype;
      });

      _fibrosis();
    });
  });
}

function _fibrosis() {

  FIBROSIS.forEach(function(fibrosis) {
    describe('F4 ' + fibrosis, function() {

      beforeEach(function() {
        this.f4 = fibrosis;
      });

      _pastTratment();
    });
  });
}

function _pastTratment() {

  PAST_TREATMENTS.forEach(function(pastTreatment) {
    describe('Past treatment: ' + pastTreatment, function() {

      beforeEach(function() {
        this.past = pastTreatment;
        this.fail = (this.past == 'naive' || this.past == 'PEG' ) ? false : true;

        // Mock some data
        this.rx = [];
        this.riba = true;
        this.weight = '66-80';

        getRxOptions(this);
      });

      it("should prepare ℞", function() {
        expect(this.rx.length).toBeGreaterThan(0);
      });
    });
  });
}

describe('HCV', function() {
  _guidelines();
});

