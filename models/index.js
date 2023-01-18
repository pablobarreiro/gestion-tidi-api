const User = require("./User");
const Project = require("./Project");

const IronWorking = require("./IronWorking");
const Carpentry = require("./Carpentry");
const Light = require("./Light");
const Marble = require("./Marble");
const IncomeTotal = require("./IncomeTotal");
const Budget = require("./Budget");

Project.hasOne(IronWorking);
IronWorking.belongsTo(Project);
Project.hasOne(Carpentry);
Carpentry.belongsTo(Project);
Project.hasOne(Light);
Light.belongsTo(Project);
Project.hasOne(Marble);
Marble.belongsTo(Project);
Project.hasOne(IncomeTotal);
IncomeTotal.belongsTo(Project);
Project.hasOne(Budget);
Budget.belongsTo(Project);

const IronWorkingOutcome = require("./IronWorkingOutcome");
const CarpentryOutcome = require("./CarpentryOutcome");
const LightOutcome = require("./LightOutcome");
const MarbleOutcome = require("./MarbleOutcome");
const IncomePartial = require("./IncomePartial");

Project.hasMany(IronWorkingOutcome);
IronWorkingOutcome.belongsTo(Project);
Project.hasMany(CarpentryOutcome);
CarpentryOutcome.belongsTo(Project);
Project.hasMany(LightOutcome);
LightOutcome.belongsTo(Project);
Project.hasMany(MarbleOutcome);
MarbleOutcome.belongsTo(Project);
Project.hasMany(IncomePartial);
IncomePartial.belongsTo(Project);

const BranchOffice = require("./BranchOffice");
const InternalState = require("./InternalState");
const Salesman = require("./Salesman");

module.exports = {
  User,
  Project,
  IronWorking,
  Carpentry,
  Light,
  Marble,
  IncomeTotal,
  IronWorkingOutcome,
  CarpentryOutcome,
  LightOutcome,
  MarbleOutcome,
  IncomePartial,
  BranchOffice,
  InternalState,
  Salesman,
  Budget,
};
