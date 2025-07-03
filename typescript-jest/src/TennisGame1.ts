import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  private isPlayer1 = (playerName: string) => {
    return playerName === this.player1Name;
  }

  private isPlayer2 = (playerName: string) => {
    return playerName === this.player2Name;
  }

  private player1HasAdvantage = () => {
    return (this.player1Score - this.player2Score == 1);
  }

  private player2HasAdvantage = () => {
    return (this.player1Score - this.player2Score == -1);
  }

  private player1Wins = () => {
    return (this.player1Score - this.player2Score >= 2);
  }

  private equalScores = () => {
    return this.player1Score === this.player2Score;
  }

  private atLeastOnePlayerHasMoreThanFourPoints = () =>{
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  wonPoint(playerName: string): void {
    if (this.isPlayer1(playerName)) {
      this.player1Score += 1;
      return;
    }
    if (this.isPlayer2(playerName)) {
      this.player2Score += 1;
      return;
    }
  }

  getScore(): string {
    let score: string = '';
    if (this.equalScores()) {
      const scoreNames: string[] = ['Love-All', 'Fifteen-All', 'Thirty-All'];
      return scoreNames[this.player1Score] || 'Deuce';
    }
    else if (this.atLeastOnePlayerHasMoreThanFourPoints()) {
      if(this.player1HasAdvantage()){
        return 'Advantage player1';
      }

      if(this.player2HasAdvantage()){
        return 'Advantage player2';
      }

      if(this.player1Wins()){
        return 'Win for player1';
      }

      return 'Win for player2';
    }
    else {
      const scoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      return scoreNames[this.player1Score] + '-' + scoreNames[this.player2Score];
    }
  }
}
