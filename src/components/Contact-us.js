import React from "react";
import $ from "jquery";
import Table from 'react-bootstrap/Table';
import * as moment from 'moment';

function contact_us() {
    let banksArr = [];
    let date;
    let dates = moment().format("YYYY-MM-DD");

    function renderBanks(banks) {
        let bankHtml = '';

        for (let el of banks) {
            bankHtml += '<tr><td>' + el.txt +
                '</td><td>' + el.rate.toFixed(2) + '</td></tr>'
        }

        $('#bank-table tbody').html(bankHtml)
    }

    function load(date) {
        $.ajax({
            url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=' + date,
            success: banks => {
                banksArr = banks.map(el => {
                    return {
                        txt: el.txt,
                        rate: el.rate,
                        exchangedate: el.exchangedate
                    }
                })
                renderBanks(banks)
            },
            error: err => {
                console.log(err)
            }
        })
    }

    $('#dates').val(moment().format('YYYY-MM-DD'))
    let datenow = moment($('#dates').val()).format("YYYY/MM/DD").split('/').join('')
    load(datenow)
    let changeDate = () => {
        date = moment($('#dates').val()).format("YYYY/MM/DD").split('/').join('')
        load(date)
    }

    return (
        <div>
            <div>
                <input id='dates' type="date"
                       defaultValue={dates}
                       onChange={changeDate}></input>
            </div>
            <Table striped bordered hover variant="dark" id="bank-table" border="1px">
                <thead>
                <tr>
                    <td>Валюта</td>
                    <td>Курс</td>
                </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </div>
    );
}

export default contact_us;