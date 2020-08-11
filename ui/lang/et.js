export default {
  isoName: 'et',
  nativeName: 'Eesti',
  label: {
    clear: 'puhastama',
    ok: 'Okei',
    cancel: 'Tühista',
    close: 'Sulgema',
    set: 'Seadma',
    select: 'Valima',
    reset: 'Lähtestada',
    remove: 'Eemaldada',
    update: 'Uuendama',
    create: 'Looma',
    search: 'Otsida',
    filter: 'Filtreerima',
    refresh: 'Värskendada'
  },
  date: {
    days: 'Pühapäeval_Esmaspäev_Teisipäev_Kolmapäev_Neljapäev_Reede_Laupäev'.split('_'),
    daysShort: 'Püh_Esm_Tei_Kol_Nel_Ree_Lau'.split('_'),
    months: 'Jaanuaril_Veebruaril_Märtsil_Aprillil_Mai_Juuni_Juuli_August_Septembril_Oktoobril_Novembril_Detsembril'.split('_'),
    monthsShort: 'Jaa_Vee_Mär_Apr_Mai_Juu_Juu_Aug_Sep_Okt_Nov_Det'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    singleDay: 'päev',
    pluralDay: 'päevad'
  },
  table: {
    noData: 'Andmed puuduvad',
    noResults: 'Vastavaid kirjeid ei leitud',
    loading: 'Laadimine ...',
    selectedRecords: function (rows) {
      return rows > 0
        ? rows > 1 ? 'Valitud on ' + rows + ' kirjet.' : rows + ' kirje on valitud.'
        : 'Ühtegi kirjet pole valitud'
    },
    recordsPerPage: 'Salvestusi ühe lehe kohta:',
    allRows: 'Kõik',
    pagination: function (start, end, total) {
      return start + '-' + end + ' ' + total + '-st'
    },
    columns: 'veerge'
  },
  editor: {
    url: 'URL',
    bold: 'Poolpaks',
    italic: 'Kaldkiri',
    strikethrough: 'Läbi kriipsutatud',
    underline: 'Allajoonitud',
    unorderedList: 'Järjestamata nimekiri',
    orderedList: 'Tellitud nimekiri',
    subscript: 'Llaindeks',
    superscript: 'Ülakiri',
    hyperlink: 'Hüperlink',
    toggleFullscreen: 'Täisekraani Lülitamine',
    quote: 'Tsitaat',
    left: 'Joondage vasakule',
    center: 'Joondage keskele',
    right: 'Joondage paremale',
    justify: 'Õigustama',
    print: 'Printida',
    outdent: 'Vähendage taanet',
    indent: 'Suurendage taanet',
    removeFormat: 'Eemaldage vormindamine',
    formatting: 'Vormindamine',
    fontSize: 'Fondi suurus',
    align: 'Joondage',
    hr: 'Sisestage horisontaalne reegel',
    undo: 'Tühista',
    redo: 'Tee uuesti',
    heading1: 'Rubriik 1',
    heading2: 'Rubriik 2',
    heading3: 'Rubriik 3',
    heading4: 'Rubriik 4',
    heading5: 'Rubriik 5',
    heading6: 'Rubriik 6',
    paragraph: 'Lõik',
    code: 'Kood',
    size1: 'Väga väike',
    size2: 'Natuke väike',
    size3: 'Normaalne',
    size4: 'Keskmise suurusega',
    size5: 'Suur',
    size6: 'Väga suur',
    size7: 'Maksimaalne',
    defaultFont: 'Vaikimisi font',
    viewSource: 'Vaateallikas'
  },
  tree: {
    noData: 'Ühtegi sõlmi pole saadaval',
    noResults: 'Vastavaid sõlmi ei leitud'
  }
}
