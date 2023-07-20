CKEDITOR.editorConfig = function(config) {
    config.google_fonts = 'Nunito', 'Nunito:wght@500';

    config.stylesSet.push({ name : 'warningImportant', element : 'p', wrap:true, attributes : { 'class' : 'warningImportant' } });
    config.stylesSet.push({ name : 'warningChannels', element : 'p', wrap:true, attributes : { 'class' : 'warningChannels' } });
    config.stylesSet.push({ name : 'warningRegistration', element : 'p', wrap:true, attributes : { 'class' : 'warningRegistration'} });

    config.stylesSet.push({ name : 'CanalesUrgencias', element : 'H5', wrap:false, attributes : { 'class' : 'CanalesUrgencias', 'title' :'Custom_Class2' } });
};