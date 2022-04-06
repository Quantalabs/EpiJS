module.exports = {
  "compartments": {
    "S": {
      "compartments": {},
      "equation": "S-((S*I*0.4/N)+sqrt(S*I*0.4/N))*w"
    },
    "I": {
      "compartments": {},
      "equation": "I-(I*0.3)+(S*I*0.4/N)"
    },
    "R": {
      "compartments": {},
      "equation": "R+((I*0.1)+sqrt(I*0.1))*w"
    }
  }
}