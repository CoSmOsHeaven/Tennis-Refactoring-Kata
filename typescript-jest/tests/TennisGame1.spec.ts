import {TennisGame1} from "../src";

describe('TennisGame1', () => {
    it('Given wrong player name any score changes', ()=>{
        const player1Name: string = 'juan';
        const player2Name: string = 'pepe';
        const tennisGame = new TennisGame1(player1Name, player2Name);

        tennisGame.wonPoint("manolito");

        expect(tennisGame.getScore()).toEqual('Love-All');
    })
});

describe('TennisGame1', () => {
    it('Given both players with score 8 returns "Deuce"', ()=>{
        const player1Name: string = 'juan';
        const player2Name: string = 'pepe';
        const tennisGame = new TennisGame1(player1Name, player2Name);

        for(let i = 0; i < 8; i++) {
            tennisGame.wonPoint("juan");
        }

        for(let i = 0; i < 8; i++) {
            tennisGame.wonPoint("pepe");
        }

        expect(tennisGame.getScore()).toEqual('Deuce');
    })
})