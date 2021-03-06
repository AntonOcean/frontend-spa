import avatar from '../../blocks/grid/img/avatar.svg';

class ProfileContent {
    render() {
        return `
        <div class="form-container">
                <h1 class="title">Профиль</h1>
                
                <form class="grid">
                
                    <img src=dist/${avatar} alt="Avatar" class="grid__avatar">
                    
                    <label class="grid__login-label">Логин</label>
                    <div class="form-item grid__login">
                        <input type="input" class="form-item__input" placeholder="Логин" disabled="disabled">
                        <i class="fas fa-user form-item__icon"></i>
                    </div>
                    
                    <label class="grid__nickname-label">Никнейм</label>
                    <div class="form-item grid__nickname">
                        <input type="input" class="form-item__input" placeholder="Никнейм">
                        <i class="fab fa-suse form-item__icon"></i>
                    </div>
                    
                    <label class="grid__password-label">Пароль</label>
                    <div class="form-item grid__password">
                        <input type="password" class="form-item__input" placeholder="Пароль">
                        <i class="fas fa-unlock form-item__icon"></i>
                        <button class="form-item__eye">
                            <i class="fa fa-eye form-item__eye-icon"></i>
                        </button>
                    </div>
                    
                    <input type="file" class="grid__upload">
                    <i class="fa fa-upload fa-3x grid__upload-icon" aria-hidden="true"></i>
                    
                    <button class="button grid__button">Сохранить</button>
                    
                </form>
                <a class="link" href="#">Редактировать</a> 
            </div>
        `
    }
}

export default ProfileContent;