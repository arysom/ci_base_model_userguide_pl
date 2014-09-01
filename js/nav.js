function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<h3>Wprowadzenie</h3>' +
		'<ul>' +
		'	<li><a href="index.html#instalallation">Instalacja</a></li>' +
		'	<li><a href="index.html#usage">Zastosowanie</a></li>' +
		'</ul>' +

		'<h3>CRUD</h3>' +
		'<ul>' +
		'	<li><a href="'+base+'crud.html#get">Pobieranie</a></li>' +
		'	<li><a href="'+base+'crud.html#insert">Dodawanie</a></li>' +
		'	<li><a href="'+base+'crud.html#update">Poprawianie</a></li>' +
		'	<li><a href="'+base+'crud.html#delete">Usuwanie</a></li>' +
		'	<li><a href="'+base+'crud.html#truncate">Opróżnianie</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Tematy Ogólne</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general.html#naming">Nazewnictwo</a></li>' +
			'<li><a href="'+base+'general.html#relations">Obsługa relacji</a></li>' +
			'<li><a href="'+base+'general.html#callbacks">Obserwatory i funkcje zwrotne</a></li>' +
			'<li><a href="'+base+'general.html#callbacks_builtin">Wbudowane obserwatory</a></li>' +
			'<li><a href="'+base+'general.html#validation">Walidacja</a></li>' +
			'<li><a href="'+base+'general.html#protected">Zabezpieczone atrybuty</a></li>' +
			'<li><a href="'+base+'general.html#arrays_vs_objects">Tablice vs obiekty</a></li>' +
			'<li><a href="'+base+'general.html#soft_delete">Miękkie kasowanie</a></li>' +
		'</ul>' +
		'</td><td class="td_sep" valign="top">' +

		'<h3>Metody użytkowe</h3>' +
		'<ul>' +
		'	<li><a href="'+base+'utilities.html#dropdown">dropdown()</a></li>' +
		'	<li><a href="'+base+'utilities.html#count_by">count_by()</a></li>' +
		'	<li><a href="'+base+'utilities.html#count_all">count_all()</a></li>' +
		'	<li><a href="'+base+'utilities.html#skip_validation">skip_validation()</a></li>' +
		'	<li><a href="'+base+'utilities.html#get_next_id">get_next_id()</a></li>' +
		'	<li><a href="'+base+'utilities.html#table">table()</a></li>' +
		'</ul>' +

		'</td></tr></table>');
}
