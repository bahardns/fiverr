# projede kullanılan teknolojiler
## bcrypt :Bcrypt, parola karması yapmak için kullanılan bir kriptografik hash fonksiyonudur. Bcrypt, Blowfish şifreleme algoritmasını temel alan bir hash fonksiyonudur ve kullanıcıların şifrelerini güvenli bir şekilde depolamalarına olanak tanır.
##
* yarn lock : Yarn, JavaScript paketlerini yönetmek için kullanılan bir paket yöneticisidir. Yarn Lock dosyası, bir proje için kullanılan tüm paketlerin tam sürümlerinin listesini içeren bir dosyadır. *Yarn Lock dosyası, proje paketlerinin belirli bir sürüm kümesini kullanarak güvenilir bir şekilde yinelenmesini sağlar. Bu, geliştiricilerin herhangi bir paketin güncellenmesi durumunda yanlışlıkla projelerinde meydana gelebilecek hataları önlemelerine yardımcı olur.
##  
* moongose Mongoose, Node.js için bir Object Document Mapper (ODM) veya Object Modeling Tool (OMT) olarak kullanılan bir kütüphanedir. Mongoose, MongoDB gibi NoSQL veritabanlarını kullanarak Node.js uygulamalarının geliştirilmesini kolaylaştırır.

* Mongoose, MongoDB'deki verileri JavaScript nesneleri olarak işlemek için tasarlanmıştır. Bu nedenle, Mongoose ile birlikte çalışırken, uygulamanızdaki verileri birkaç satır kodla MongoDB'ye kaydedebilirsiniz. Ayrıca, Mongoose, MongoDB veritabanındaki verilerin şema ve modellemesini kolaylaştırmak için özel bir sözdizimi sağlar.

* Mongoose ayrıca, MongoDB veritabanı ile iletişim kurarken asenkron işlemleri yönetmek için Promises veya Callbacks kullanmanıza olanak tanır. Bu özellikler, Node.js uygulamalarının geliştirilmesini kolaylaştırır ve veritabanı işlemlerinin daha düzenli ve yönetilebilir hale gelmesine yardımcı olur.

## ekspress
* Express, Node.js için hafif ve esnek bir web uygulama çerçevesidir. Express, web uygulamalarının geliştirilmesini kolaylaştıran birçok özellik sunar. Bu özellikler arasında HTTP istekleri ve yanıtları yönetme, yönlendirme, ara katman işlevleri, sabit dosya sunucu, oturum yönetimi, şablon motorları gibi birçok özellik bulunur.

* Express, minimalist bir yapıya sahip olmasına rağmen, modüler bir tasarıma sahiptir. Bu sayede, uygulamanızın ihtiyaçlarına göre sadece ihtiyacınız olan modülleri yükleyebilirsiniz. Bu da uygulamanızın hızını artırır ve gereksiz kod yükünü azaltır.

* Express ayrıca, Node.js ile uyumlu olan birçok üçüncü taraf modülü ile uyumlu olduğu için, uygulamanızda istediğiniz modülleri kolayca kullanabilirsiniz. Bu da, geliştirme sürecini hızlandırır ve uygulamanızın işlevselliğini artırır.
## dotenv
* Dotenv, Node.js uygulamalarında kullanılan bir pakettir. Dotenv, bir uygulamanın ortam değişkenlerini ayarlamak ve yüklemek için kullanılır. Dotenv, bir .env dosyasından çevresel değişkenleri yükler ve bu değişkenleri process.env nesnesine ekler.

* Bu özellik sayesinde, bir uygulamayı farklı ortamlarda (geliştirme, test, üretim vb.) çalıştırırken aynı kodu kullanabilirsiniz, ancak her ortam için farklı çevresel değişkenler ayarlayabilirsiniz. Bu, uygulamayı daha esnek hale getirir ve geliştirme sürecini kolaylaştırır.

* Örneğin, bir web uygulamasında veritabanı kimlik bilgileri, API anahtarları veya diğer hassas bilgiler, .env dosyasında saklanabilir. Bu bilgiler, kodda sabit olarak belirtilmek yerine, .env dosyasında tanımlanarak, uygulamanın güvenliğini artırır.

* Dotenv, kolayca yüklenebilen ve kullanılabilen bir paket olduğu için, birçok Node.js uygulamasında kullanılır.