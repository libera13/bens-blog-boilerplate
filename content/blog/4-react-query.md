---
title: React-query - biblioteka do zarządzanie danymi z API
date: 2021-04-18T21:50:21
excerpt: W tym artykule przyjrzymy się niesamowitej bibliotece o nazwie React-query
---


[Źródło artykułu](https://easyontheweb.com/what-is-react-query-and-how-to-use-it/)

&ensp; &ensp; W tym artykule przyjrzymy się niesamowitej bibliotece o nazwie React-query i zobaczymy, czym jest react-query, dlaczego powinniśmy go używać w naszych aplikacjach React i oczywiście jak możemy go używać w naszych aplikacjach.

&ensp; &ensp; Pobieranie danych asynchronicznie i utrzymywanie ich w aplikacji React jest jedną z najbardziej frustrujących rzeczy do zrobienia, nawet jeśli na początku nie jest to trudne - sprawy komplikują się naprawdę szybko z pobieraniem danych i utrzymywaniem stanu pobranych danych.

&ensp; &ensp; Osobiście używałem Reduxa jako magazynu pamięci podręcznej dla pobieranych danych wcześniej i naprawdę nie było to przyjemne doświadczenie. React-query w tym sensie jest absolutnym ratunkiem, tak jak jego rodzeństwo react-table.

### Zalety używania react-query

&ensp; &ensp; Nie lubię pisać dużo blogów o poszczególnych bibliotekach, ale react-query szybko stał się jednym z moich ulubionych bibliotek wszech czasów i dlatego chciałbym podkreślić zalety react-query już na początku artykułu, abyście razem ze mną wsiedli do tego hype'owego pociągu.

&ensp; &ensp; Niektóre z zalet react-query to :

- Automatyczne buforowanie danych
- Automatyczne ponowne pobieranie świeżych danych po akcjach użytkownika
- Super czysta składnia
- Prefetching
- Używanie zbuforowanych danych
- Domyślne zarządzanie ładowaniem, stanem powodzenia i błędami
- Nieskończone zapytania

&ensp; &ensp; Szczerze mówiąc, ta lista mogłaby się ciągnąć w nieskończoność i nie jest to nawet w zakresie tego artykułu, aby omówić każdy z tych punktów. Nie jest to również celem tego artykułu, celem jest uświadomienie Ci korzyści i dać Ci wgląd w możliwości, jakie daje nam react-query.

&ensp; &ensp; Aby zagłębić się i sprawdzić wszystko co daje react-query zawsze możesz zajrzeć do dokumentacji.

### Mniej kodu

![kod](https://i2.wp.com/easyontheweb.com/wp-content/uploads/2021/01/carbon-2021-01-12T170936.493.png?w=757&ssl=1)

&ensp; &ensp; Jeśli  kiedykolwiek zdarzyło Ci się pisać kod taki jak ten, lub kod podobny do tego wewnątrz hooka (tak, wszyscy mądrzy), to react-query jest narzędziem dla Ciebie. Osobiście, nienawidzę używać stanów ładowania i błędów wszędzie - nawet jeśli napiszesz custom hooki, aby to zrobić, react-query oferuje o wiele więcej.


![przykład react-query](https://i0.wp.com/easyontheweb.com/wp-content/uploads/2021/01/carbon-2021-01-12T171357.638.png?w=749&ssl=1)

&ensp; &ensp; To jest refaktoryzowany kod wykorzystujący useQuery z react-query. Jedną z rzeczy, którą zauważysz bezpośrednio jest to, jak react-query zwraca isLoading, błąd i dane . Były to rzeczy, którymi musieliśmy zarządzać sami w pierwszej wersji kodu.

&ensp; &ensp; Wszystko co musisz zrobić to zaimportować hook useQuery z react-query i przekazać do niego trzy argumenty - unikalny klucz dla zapytania, funkcję, która jest faktycznym zapytaniem oraz opcjonalny obiekt config, który omówimy później.

&ensp; &ensp; W ten sposób, react query zmniejsza całą masę kodu. A jeśli chodzi o kod, to im mniejsza powierzchnia kodu, tym mniejsze szanse na błędy.

&ensp; &ensp; Teraz, jeśli wyodrębnisz to również do hooka, voila! Jeszcze bardziej zmniejszyłeś swój kod. Ale zostawię to wam...

### Dane w pamięci podręcznej
Jedną z największych zalet react-query jest mechanizm cache'owania i synchronizacji danych. Dzięki opcjom takim jak initialData, staleTime, cacheTime itd. jest to tak proste i wspaniałe do pracy

&ensp; &ensp; Pomyślmy o tym, co normalnie dzieje się w aplikacji React, przechowywałbyś dane, które chcesz buforować w Reduxie lub jakimkolwiek innym globalnym mechanizmie zarządzania stanem, którego używasz, a za każdym razem, gdy wchodzisz do komponentu, najprawdopodobniej masz useEffect, w którym pobierasz nowe dane (lub nie, w oparciu o porównanie z danymi z pamięci podręcznej) i ponownie przechowujesz nowo pobrane dane w swoim globalnym stanie.

&ensp; &ensp; Jest to gorączkowe, zabugowane i nie daje zbyt wielu opcji (chyba, że sam je napiszesz, co znowu zwiększa powierzchnię kodu).

&ensp; &ensp; Z react-query, wszystko to staje się proste. Wykorzystuje on koncepcję czegoś, co nazywa się stale danymi. Jeśli react-query widzi, że dane są stale, próbuje pobrać nowsze dane. Domyślnie czas stale wynosi 0, czyli dane stają się stale zaraz po ich pobraniu.

&ensp; &ensp; Pierwszą opcją, którą należy rozważyć jest czas stale, dłuższy czas stale, dłużej react-query będzie czekać zanim uzna zbuforowane dane za stale i spróbuje pobrać nowe dane.

Warto zauważyć, że react-query nie implementuje pollingu w żadnym sensie, zamiast tego używa aktywności użytkownika do wyzwalania następnej synchronizacji nieaktualnych danych.

&ensp; &ensp; Stałe zapytania są refetched automatycznie w tle, gdy:

- Montowane są nowe instancje zapytania
- Okno zostanie przeorientowane
- Sieć jest ponownie podłączona.
- Opcjonalnie zapytanie może być skonfigurowane z interwałem refaktoryzacji.

&ensp; &ensp; Wszystko to jest konfigurowalne poprzez użycie refetchOnMount, refetchOnWindowFocus, refetchOnReconnect i refetchInterval.

&ensp; &ensp; Jeśli nie chcesz ciągle nasłuchiwać na aktywności użytkownika wymienione powyżej, możesz zwiększyć staleTime dla zapytania.

&ensp; &ensp; Jak odbywa się buforowanie danych? Buforowanie danych jest oparte na kombinacji klucz + funkcja zapytania, której używasz wewnątrz useQuery. Każda unikalna kombinacja jest używana do buforowania konkretnych danych.

&ensp; &ensp; Co więcej, nigdy nie będziesz musiał widzieć "ładowania" na ekranie, jeśli zapytanie zostało już raz uruchomione. Po tym, zbuforowane dane pojawią się na ekranie początkowo i zostaną zaktualizowane po zakończeniu synchronizacji. Zgrabne, prawda?

&ensp; &ensp; Aby zrozumieć kompletny cykl życia buforowania, gorąco polecam zapoznać się z Przykładami Buforowania.

### Paginowane zapytania

![koda do paginacji](https://i0.wp.com/easyontheweb.com/wp-content/uploads/2021/01/carbon-2021-01-13T193333.872.png?w=715&ssl=1)

&ensp; &ensp; Jak myślisz, co się stanie, kiedy mamy ten kawałek kodu i zmienimy numer strony? Niestety, to co się dzieje to fakt, że użytkownik widzi "ładowanie", tzn. zapytanie przechodzi w stan ładowania, a następnie w stan sukcesu przy każdej zmianie strony.

&ensp; &ensp; Dzieje się tak, ponieważ kombinacja klucz + queryFunction zmieniła się wraz ze zmianą numeru strony. Dlatego też react-query nie jest w stanie korzystać z buforowanych danych. Cóż, nawet bez react-query 99% aplikacji działa w ten sposób.

&ensp; &ensp; Z react-query masz jednak świetną opcję o nazwie keepPreviousData. Kiedy ta opcja jest ustawiona na true w obiekcie konfiguracyjnym, dane z poprzedniego zapytania są dostępne nawet kiedy zapytanie się zmienia i dane są zamieniane z nowymi danymi jak tylko nowe dane nadejdą. Jest to lepsze doświadczenie użytkownika, ponieważ nie musi on oglądać komunikatu o ładowaniu raz po raz.

&ensp; &ensp; Aby dowiedzieć się więcej na temat zapytań paginowanych sprawdź to -> Zapytania paginowane.

### Mutacje
&ensp; &ensp; useQuery jest hookiem, którego używaliśmy do tej pory, useQuery jest jednak używany tylko dla zapytań GET. Co z zapytaniami aktualizującymi takimi jak PUT/DELETE/POST? Co react-query ma dla nas podczas pracy z tymi zapytaniami?

&ensp; &ensp; Tak jak hook useQuery, react-query dostarcza nam kolejny fajny hook o nazwie useMutation.
![Oficjalny przykład useMutation z docs](https://i2.wp.com/easyontheweb.com/wp-content/uploads/2021/01/carbon-2021-01-13T195053.313.png?w=765&ssl=1)

&ensp; &ensp; Składnia useMutation jest nieco bardziej złożona w porównaniu do useQuery. Sam hook useMutation przyjmuje jako argumenty funkcję oraz obiekt konfiguracyjny (zauważ, że nie ma tutaj klucza).

&ensp; &ensp; Aby jednak wywołać metodę mutacji, należy użyć metody mutation.mutate z argumentem, który ma być przekazany do funkcji użytej wewnątrz useMutation.

&ensp; &ensp; Wszystkie stany, które były dostępne dla nas w useQuery jak error, isLoading, isSuccess etc są dostępne również dla mutacji.

&ensp; &ensp; Mutacje posiadają również metody callback, które mogą być użyte w obiekcie konfiguracyjnym dla hooka useMutation. Jedną z najczęściej używanych kombinacji jest ta z onSuccess i invalidateQueries.

&ensp; &ensp; react-query pozwala nam na unieważnienie dowolnego lub wszystkich zapytań i ich zbuforowanych danych. Przyjrzyjmy się teraz bardzo powszechnemu scenariuszowi - dodajemy nowy rekord do bazy danych za pomocą hooka useMutation, w prawie 95% przypadków to co chcielibyśmy następnie zrobić, to pobrać wszystkie rekordy ponownie, tak aby nowy zaktualizowany rekord został wyświetlony. Aby to zrobić, możemy użyć funkcjonalności invalidateQueries.

&ensp; &ensp; Kiedy unieważniamy jakieś zapytanie, pomyśl o tym, że usuwamy zbuforowane dane dla tego zapytania i ponownie pobieramy dane dla tego zapytania i przechowujemy je w globalnym cache'u.
![Oficjalny przykład useMutation z invalidateQueries](https://i2.wp.com/easyontheweb.com/wp-content/uploads/2021/01/carbon-2021-01-13T200033.095.png?resize=768%2C305&ssl=1)

&ensp; &ensp; Zauważ, że w tym przykładzie unieważniamy dane dla dwóch konkretnych zapytań - todos i reminders, a zatem react-query automatycznie uruchomi hook useQuery dla tych dwóch zapytań i ponownie pobierze i ustawi nowe dane.


autor [Sahil Thakur](https://easyontheweb.com/about-sahil-thakur/)
