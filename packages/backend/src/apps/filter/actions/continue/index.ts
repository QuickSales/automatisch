import defineAction from '../../../../helpers/define-action';

export default defineAction({
  name: 'Continue if conditions match',
  key: 'continueIfMatches',
  description: 'Let the execution continue if the conditions match',
  arguments: [
  ],

  async run($) {
    $.execution.exit();
  },
});
