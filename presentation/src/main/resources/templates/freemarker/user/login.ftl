<style>
    .table-wrapper {

    }

    .table-wrapper > tr {

    }

    .table-wrapper > th {

    }

    .login-form {
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
<form action="/login" method="post">
    <div class="login-form">
        <div className="table-wrapper">
            <table>
                <tr>
                    <th>아이디</th>
                    <td><input type="text" name="loginId"></td>
                </tr>
                <tr>
                    <th>패스워드</th>
                    <td><input type="text" name="password"></td>
                </tr>
            </table>
            <button type="submit">확인</button>
        </div>
        <a href="/register/form">회원가입</a>
    </div>
</form>
