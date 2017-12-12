import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';
import * as bertha from 'bertha-client';

export default async (environment = 'development') => {
  const spreadsheet = await bertha.get('1nug_Fln7KE2bRiOULYpu9WRJ5EhdSdMgnPy4BBbpklk', [
    'data',
    'groups',
    'options|object',
    'credits',
  ]);

  const groups = spreadsheet.groups.map(group => ({
    id: group.name,
    title: group.value,
    showAdBefore: group.name === 'previous',
    people: spreadsheet.data.filter(person => person.type === group.name).map(person => ({
      ...person,
      picurl: /^https?:/.test(person.picurl)
        ? person.picurl
        : `https://ig.ft.com/sites/person-of-the-year/images/${person.picurl}`,
    })),
  }));

  console.dir('groups', groups);

  const d = await article(environment);
  const flags = await getFlags(environment);
  const onwardJourney = await getOnwardJourney(environment);
  /*
  An experimental demo that gets content from the API
  and overwrites some model values. This requires the Link File
  to have been published. Also next-es-interface.ft.com probably
  isn't a reliable source. Also this has no way to prevent development
  values being seen in productions... use with care.

  try {
    const a = (await axios(`https://next-es-interface.ft.com/content/${d.id}`)).data;
    d.headline = a.title;
    d.byline = a.byline;
    d.summary = a.summaries[0];
    d.title = d.title || a.title;
    d.description = d.description || a.summaries[1] || a.summaries[0];
    d.publishedDate = new Date(a.publishedDate);
    f.comments = a.comments;
  } catch (e) {
    console.log('Error getting content from content API');
  }

  */

  return {
    ...d,
    flags,
    onwardJourney,
    spreadsheet,
    groups,
  };
};
